import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define an initial state
const initialState = {
  appointments: [],
  error: null,
};
/ Create an async thunk for fetching appointments
export const fetchAppointments = createAsyncThunk('appointments/fetchAppointments', async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/appointments');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }