import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const authToken = localStorage.getItem('token');

export const getFurnitures = createAsyncThunk('get/furnitures', async () => {
  const furnitures = await axios.get('http://[::1]:3001/api/v1/furnitures', {
    headers: {
      'content-type': 'application/json',
      authorization: authToken,
    },
  });
  return furnitures.data;
});

export const postFurniture = createAsyncThunk(
  'add/furnitures',
  async (furnitureInfo) => {
    const furniture = await axios.post(
      'http://[::1]:3001/api/v1/furnitures',
      furnitureInfo,
      {
        headers: {
          'content-type': 'application/json',
          authorization: authToken,
        },
      }
    );

    console.log(furniture.data);
    // return furniture.data;
  }
);

export const initialState = {
  furnitures: [],
};

const furnitureSlice = createSlice({
  name: 'furnitures',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFurnitures.fulfilled, (state, { payload }) => {
      state.furnitures.push(payload);
    });
  },
  extraReducers: (builder) => {
    builder.addCase(postFurniture.fulfilled, (state, { payload }) => {
      // state.furnitures.push(payload);
    });
  },
});

export default furnitureSlice;
