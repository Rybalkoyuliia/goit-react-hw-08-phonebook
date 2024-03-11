import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './slice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
