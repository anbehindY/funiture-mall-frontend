import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getSingleFurniture = createAsyncThunk(
  'get/furnitures',
  async () => {
    const authToken = localStorage.getItem('token');
    const response = await axios.get(
      'http://[::1]:3001/api/v1/furnitures',
      {
        headers: {
          'content-type': 'application/json',
          authorization: authToken,
        },
      },
    );
    const furniture = response.data;
    return furniture;
  },
);

export const initialState = {
  singleFurniture: [],
  isLoading: false,
  loadingError: false,
  message: '',
};

const singleFurnitureSlice = createSlice({
  name: 'singleFurniture',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSingleFurniture.pending, (state) => {
        state.isLoading = true;
        state.loadingError = false;
      })
      .addCase(getSingleFurniture.fulfilled, (state, { payload }) => {
        state.singleFurniture = payload;
        state.isLoading = false;
        state.loadingError = false;
        state.message = 'Loaded';
      })
      .addCase(getSingleFurniture.rejected, (state) => {
        state.loadingError = true;
        state.isLoading = false;
        state.message = 'Failed';
      });
  },
});

export default singleFurnitureSlice.reducer;
