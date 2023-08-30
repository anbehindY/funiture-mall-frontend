import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getFurnitures = createAsyncThunk('get/furnitures', async () => {
  const furnitures = await axios.get('http://[::1]:3001/api/v1/furnitures');
  //   return furnitures.data;
  console.log(furnitures.data);
});

export const initialState = {
  furnitures: [],
};

const furnitureSlice = createSlice({
  name: 'furnitures',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFurnitures.fulfilled, (state, { payload }) => {
      console.log(payload);
      console.log(state);
    });
  },
});

export default furnitureSlice;
