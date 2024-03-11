import { createSlice } from '@reduxjs/toolkit';

import { loginThunk, logoutThunk, registerThunk } from './authOperations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLogedIn: false,
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLogedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLogedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logoutThunk.fulfilled, state => {
        return initialState;
      });
  },
  selectors: {
    setUser: state => state.user,
    setIsLoggedIn: state => state.isLogedIn,
    setIsLoading: state => state.isLoading,
  },
});

export const authReducer = slice.reducer;
export const { setUser, setIsLoading, setIsLoggedIn } = slice.selectors;
