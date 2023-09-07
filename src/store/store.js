import { configureStore } from '@reduxjs/toolkit';
import furnitureReducer from './furnitureSlice';
import appointmentsReducer from './appointmentsSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    furniture: furnitureReducer,
    appointments: appointmentsReducer,
    user: userSlice.reducer,
  },
});

export default store;
