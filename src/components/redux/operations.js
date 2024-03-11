import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi, setToken } from 'axiosConfig/auth';

export const fetchDataThunk = createAsyncThunk(
  'fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await authApi.get('/contacts');
      setToken(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteDataThunk = createAsyncThunk(
  'deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await authApi.delete(`contacts/${id}`);
      setToken(data);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addDataThunk = createAsyncThunk(
  'addContact',
  async (body, thunkAPI) => {
    try {
      const { data } = await authApi.post('/contacts', body);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
