import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reduxToolkit/userSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;
