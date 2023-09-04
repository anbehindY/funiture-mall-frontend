import { createSlice } from '@reduxjs/toolkit';
import getFurnitures from './furnitureaction';

export const furnitureSlice = createSlice({
  name: 'furniture',
  initialState: {
    furnitures: [],
    isLoading: false,
    isSuccess: false,
    message: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFurnitures.pending, (state) => {
        const newstate = {
          ...state, isLoading: true, isSuccess: false, message: 'loading...',
        };
        return newstate;
      })
      .addCase(getFurnitures.fulfilled, (state, action) => {
        const newstate = {
          ...state, isLoading: false, isSuccess: true, message: 'success', furnitures: action.payload,
        };
        return newstate;
      })
      .addCase(getFurnitures.rejected, (state, action) => {
        const newstate = {
          ...state, isLoading: false, isSuccess: false, message: action.error.message,
        };
        return newstate;
      });
  },
});

export default furnitureSlice.reducer;
