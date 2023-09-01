import { configureStore } from '@reduxjs/toolkit';
import furnitureSlice from './furnitureSlice';
import userSlice from './userSllice';

const store = configureStore({
  reducer: {
    furniture: furnitureSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
