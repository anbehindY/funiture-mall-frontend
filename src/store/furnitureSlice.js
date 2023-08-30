import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getFurnitures = createAsyncThunk('get/missions', async () => {
  const furnitures = await axios.get('https://api.spacexdata.com/v3/missions');
  return furnitures.data;
});

export const initialState = {
  furnitures: {},
  loadingFurniture: true,
  furnitureLoadingError: undefined,
};

const furnitureSlice = createSlice({
  name: 'furniture',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFurnitures.fulfilled, (state, { payload }) => {
      console.log(payload);
    });
  },
});

export default furnitureSlice;
