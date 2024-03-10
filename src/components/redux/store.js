import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './slice';

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
