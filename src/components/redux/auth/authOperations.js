import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi, removeToken, setToken } from 'axiosConfig/auth';

export const registerThunk = createAsyncThunk(
  'register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authApi.post('users/signup', credentials);
      console.log(data);
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
    console.log(auth);
    try {
      const { data } = await authApi.post('users/logout', auth);

      setToken(data.token);
      // removeToken()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
