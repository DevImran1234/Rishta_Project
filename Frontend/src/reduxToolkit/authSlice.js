import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('usertoken') || null,
  isAuthenticated: !!localStorage.getItem('usertoken'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('usertoken');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
