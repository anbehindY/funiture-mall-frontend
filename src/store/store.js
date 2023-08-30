import { configureStore } from '@reduxjs/toolkit';
import furnitureReducer from './furnitureSlice';

const store = configureStore({
  reducer: {
    furniture: furnitureReducer,
  },
});

export default store;
