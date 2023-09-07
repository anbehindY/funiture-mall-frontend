import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
    builder.addCase(postUserLogin.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(postUserLogin.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.isAuthenticated = payload.email !== '';
      state.isLoading = false;
    }).addCase(postUserLogin.rejected, (state) => {
      state.isLoading = false;
      state.error = 'Username or password is incorrect';
    });
  },
});

export default userSlice;
