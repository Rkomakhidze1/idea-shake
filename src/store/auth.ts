import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
