import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const furnitureSlice = createSlice({
  name: 'furniture',
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default furnitureSlice.reducer;
