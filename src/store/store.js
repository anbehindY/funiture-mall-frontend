import { configureStore } from '@reduxjs/toolkit';
import furnitureSlice from './furnitureSlice';

const store = configureStore({
  reducer: {
    furniture: furnitureSlice.reducer,
  },
});

export default store;
