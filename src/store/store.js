import { configureStore } from '@reduxjs/toolkit';
import furnitureReducer from './furnitureSlice';
import appointmentsReducer from './appointmentsSlice';
import userSlice from './userSlice';
import singleFurnitureReducer from './singleFurnitureSlice';

const store = configureStore({
  reducer: {
    furnitures: furnitureReducer,
    singleFurniture: singleFurnitureReducer,
    appointments: appointmentsReducer,
    user: userSlice.reducer,
  },
});

export default store;
