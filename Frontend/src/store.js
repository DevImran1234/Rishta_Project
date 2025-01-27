import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reduxToolkit/userSlice';
import authReducer from  './reduxToolkit/authSlice'

export const store = configureStore({
  reducer: {
    users: userReducer,
    auth: authReducer,
  },
});

export default store;
