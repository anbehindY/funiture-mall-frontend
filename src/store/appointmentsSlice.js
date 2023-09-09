import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const authToken = localStorage.getItem('token');

export const fetchAppointments = createAsyncThunk(
  'fetch/appointments',
  async (userId) => {
    const authToken = localStorage.getItem('token');
    const response = await axios.get(
      `http://[::1]:3001//api/v1/users/${userId}/appointments`,
      {
        headers: {
          'content-type': 'application/json',
          authorization: authToken,
        },
      },
    );
    const appointments = response.data;
    return appointments;
  },
);

export const addAppointment = createAsyncThunk(
  'add/appointment',
  async (appointmentDetail) => {
    const authToken = localStorage.getItem('token');
    const response = await axios.post(
      `http://[::1]:3001//api/v1/furnitures/${appointmentDetail.furniture_id}/appointments`,
      appointmentDetail,
      {
        headers: {
          'content-type': 'application/json',
          authorization: authToken,
        },
      },
    );
    const appointment = await response.data;
    return appointment;
  },
);

export const deleteAppointment = createAsyncThunk(
  'appointments/deleteAppointment',
  async (id) => {
    const authToken = localStorage.getItem('token');
    const response = await axios.delete(
      `http://[::1]:3001//api/v1/appointments/${id}`,
      {
        headers: {
          'content-type': 'application/json',
          authorization: authToken,
        },
      },
    );
    // return response.data;
    const result = await response.data;
    return result;
  },
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
      .addCase(deleteAppointment.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        const filteredAppointment = state.appointments.filter(
          (appointment) => appointment.id !== payload,
        );
        state.appointments = filteredAppointment;
      })
      .addCase(deleteAppointment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchAppointments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAppointments.fulfilled, (state, { payload }) => {
        state.appointments = payload;
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default appointmentsSlice.reducer;
