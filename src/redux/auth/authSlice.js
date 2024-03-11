import { createSlice } from '@reduxjs/toolkit';

import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from './authOperations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLogedIn: false,
  isLoading: false,
  error: null,
  isRefresh: false,
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
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLogedIn = true;
        state.isRefresh = false;
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefresh = true;
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefresh = false;
      });
  },
  selectors: {
    setUser: state => state.user,
    setIsLoggedIn: state => state.isLogedIn,
    setIsLoading: state => state.isLoading,
    setIsRefreshing: state => state.isRefresh,
  },
});

export const authReducer = slice.reducer;
export const { setUser, setIsLoading, setIsLoggedIn, setIsRefreshing } =
  slice.selectors;
