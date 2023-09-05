import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define an initial state
const initialState = {
  appointments: [],
  error: null,
  status: '',
};

// Define the addWarrantyToAppointment async thunk
export const addWarrantyToAppointment = createAsyncThunk('appointments/addWarranty', async (appointmentId) => {
  const response = await fetch(`/api/appointments/${appointmentId}/addWarranty`, {
    method: 'POST',
  });
  const data = await response.json();
  return data;
});

export const deleteAppointment = createAsyncThunk('appointments/deleteAppointment', async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3001/api/v1/appointments/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete appointment');
  }
});

export const fetchAppointments = createAsyncThunk('appointments/fetchAppointments', async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/v1/appointments');
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch appointments');
  }
});

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addWarrantyToAppointment.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addWarrantyToAppointment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Update the state with the new appointment data or any other necessary updates
        // For example, you can mark the appointment as having a warranty
      })
      .addCase(addWarrantyToAppointment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteAppointment.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteAppointment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Update the appointments state to remove the deleted appointment
        state.appointments = state.appointments.filter((appointment) => appointment.id !== action.payload.id);
      })
      .addCase(deleteAppointment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchAppointments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.appointments = action.payload;
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
