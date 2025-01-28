import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  name: null,
  email: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { token, name, email } = action.payload;
      state.token = token;
      state.name = name;
      state.email = email;
    },
    logout: (state) => {
      state.token = null;
      state.name = null;
      state.email = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
