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
  'post/furnitures',
  async (furnitureData) => {
    const furniture = await axios.post(
      'http://[::1]:3001/api/v1/furnitures',
      furnitureData,
      {
        headers: {
          'content-type': 'application/json',
          authorization: authToken,
        },
      }
    );
    return furniture.data;
  }
);

export const initialState = {
  furnitures: [],
  message: '',
};

const furnitureSlice = createSlice({
  name: 'furnitures',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFurnitures.fulfilled, (state, { payload }) => {
        state.furnitures.push(payload);
        state.message = 'loaded';
      })

      .addCase(addFurniture.fulfilled, (state, { payload }) => {
        console.log(payload);
      });
  },
});

export default furnitureSlice.reducer;
