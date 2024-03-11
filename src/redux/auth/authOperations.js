import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi, removeToken, setToken } from 'axiosConfig/auth';

export const registerThunk = createAsyncThunk(
  'register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authApi.post('users/signup', credentials);

      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authApi.post('users/login', credentials);

      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'logout',
  async (auth, thunkAPI) => {
    try {
      await authApi.post('users/logout');
      removeToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk('refresh', async (_, thunkAPI) => {
  const savedToken = thunkAPI.getState().auth.token;
  if (!savedToken) {
    return thunkAPI.rejectWithValue('Error');
  }
  try {
    setToken(savedToken);
    const { data } = await authApi.get('users/current');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
