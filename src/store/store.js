import { configureStore } from '@reduxjs/toolkit';
import furnitureSlice from './furnitureSlice';
import appointmentsReducer from './appointmentsSlice';
import userSlice from './userSllice';

const store = configureStore({
  reducer: {
    furniture: furnitureSlice.reducer,
    appointments: appointmentsReducer,
    user: userSlice.reducer,
  },
});

export default store;
