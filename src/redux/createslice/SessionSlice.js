import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getSession = createAsyncThunk('Session/getSession', async () => {
  try {
    const response = await axios.get('http://localhost:3001/authentication', { withCredentials: true });
    return response.data;
  } catch (error) {
    return error.message;
  }
});
export const sessionSlice = createSlice({
  name: 'Session',
  initialState: {
    currentUser: { name: '', email: '' },
    isLoading: false,
    isLogin: false,
    message: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSession.pending, (state) => {
        const newstate = {
          ...state, isLoading: true, isLogin: false, message: 'loading...',
        };
        return newstate;
      })
      .addCase(getSession.fulfilled, (state, action) => {
        const newstate = {
          ...state, isLoading: false, isLogin: true, message: 'success', currentUser: action.payload,
        };
        return newstate;
      })
      .addCase(getSession.rejected, (state, action) => {
        const newstate = {
          ...state, isLoading: false, isLogin: false, message: action.error.message,
        };
        return newstate;
      });
  },
});

export default sessionSlice.reducer;
