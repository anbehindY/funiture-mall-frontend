import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const authToken = localStorage.getItem('token');

export const fetchAppointments = createAsyncThunk(
  'fetch/appointments',
  async (userId) => {
    const response = await axios.get(
      `http://[::1]:3001//api/v1/users/${userId}/appointments`,
      {
        headers: {
          'content-type': 'application/json',
          authorization: authToken,
        },
      }
    );
    const appointments = response.data;
    return appointments;
  }
);

export const addAppointment = createAsyncThunk(
  'add/appointment',
  async (appointmentDetail) => {
    const response = await axios.post(
      `http://[::1]:3001//api/v1/furnitures/${appointmentDetail.furniture_id}/appointments`,
      appointmentDetail,
      {
        headers: {
          'content-type': 'application/json',
          authorization: authToken,
        },
      }
    );
    const appointment = await response.data;
    return appointment;
  }
);

export const deleteAppointment = createAsyncThunk(
  'appointments/deleteAppointment',
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/api/v1/appointments/${id}`,
        {
          headers: {
            'content-type': 'application/json',
            authorization: authToken,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to delete appointment');
    }
  }
);

const initialState = {
  appointments: [],
  error: null,
  status: '',
};

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteAppointment.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteAppointment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Update the appointments state to remove the deleted appointment
        state.appointments = state.appointments.filter(
          (apment) => apment.id !== action.payload.id
        );
      })
      .addCase(deleteAppointment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchAppointments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAppointments.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.appointments.push(payload);
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default appointmentsSlice.reducer;

export const selectAppointments = (state) => state.appointments.appointments;
export const selectAppointmentsStatus = (state) => state.appointments.status;
export const selectAppointmentsError = (state) => state.appointments.error;
