import { configureStore } from '@reduxjs/toolkit';
import furnitureSlice from './furnitureSlice';
import reservationReducer from './reservationReducer';

const store = configureStore({
  reducer: {
    furniture: furnitureSlice.reducer,
    reservation: reservationReducer,
  },
});

export default store;
