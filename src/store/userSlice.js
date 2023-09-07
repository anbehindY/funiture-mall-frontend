import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getLoginStatus = createAsyncThunk('get/status', async () => {
  const loginStatus = await axios.get('http://localhost:3001/login');
  return loginStatus.data.status.data.user;
});

export const postUserLogin = createAsyncThunk(
  'post/login',
  async (userData) => {
    const login = await axios.post('http://localhost:3001/login', userData, {
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
    });
    return login.data.status.data.user;
  },
);

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'furnitures',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLoginStatus.pending, (state, { payload }) => {
      state.isLoading = true;
    }).addCase(getLoginStatus.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.isAuthenticated = payload.email !== '';
      state.isLoading = false;
    }).addCase(getLoginStatus.rejected, (state, { payload }) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = true;
    });
    builder.addCase(postUserLogin.pending, (state, { payload }) => {
      state.isLoading = true;
    }).addCase(postUserLogin.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.isAuthenticated = payload.email !== '';
      state.isLoading = false;
    });
  },
});

export default userSlice;
