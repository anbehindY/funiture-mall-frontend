import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const authToken = localStorage.getItem('token');

export const getFurnitures = createAsyncThunk('get/furnitures', async () => {
  const response = await axios.get('http://[::1]:3001/api/v1/furnitures', {
    headers: {
      'content-type': 'application/json',
      authorization: authToken,
    },
  });
  const furnitures = response.data;
  return furnitures;
});

export const addFurniture = createAsyncThunk(
  'add/furniture',
  async (furnitureDetail) => {
    const response = await axios.post(
      'http://[::1]:3001/api/v1/furnitures',
      { furniture: furnitureDetail },
      {
        headers: {
          'content-type': 'application/json',
          authorization: authToken,
        },
      }
    );
    const furniture = response.data;
    return furniture;
  }
);

export const deleteFurniture = createAsyncThunk('add/furniture', async (id) => {
  const response = await axios.delete(
    `http://[::1]:3001/api/v1/furnitures/${id}`,
    {
      headers: {
        'content-type': 'application/json',
        authorization: authToken,
      },
    }
  );
  const furniture = response.data;
  return furniture;
});

export const initialState = {
  furnitures: [],
  isLoading: false,
  loadingError: false,
  message: '',
};

const furnitureSlice = createSlice({
  name: 'furnitures',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFurnitures.pending, (state) => {
        state.isLoading = true;
        state.loadingError = false;
      })
      .addCase(getFurnitures.fulfilled, (state, { payload }) => {
        state.furnitures.push(payload);
        state.isLoading = false;
        state.loadingError = false;

        state.message = 'Loaded';
      })
      .addCase(getFurnitures.rejected, (state) => {
        state.loadingError = true;
        state.isLoading = false;
        state.message = 'Failed';
      });
  },
});

export default furnitureSlice.reducer;
