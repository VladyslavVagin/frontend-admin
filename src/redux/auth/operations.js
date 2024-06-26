// @ts-nocheck
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };

  export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
      try {
        const res = await axios.post('/api/user/login', credentials);
        setAuthHeader(res.data.token);
        toast.success(`Welcome ${res.data.name}`);
        return res.data;
      } catch (error) {
        toast.error('ERROR, Invalid data');
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
      await axios.get('api/user/logout');
      clearAuthHeader();
    } catch (error) {
      toast.error('Error, server not answer');
      return thunkAPI.rejectWithValue(error.message);
    }
  });

  export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
  
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
  
      try {
        setAuthHeader(persistedToken);
        const res = await axios.get('api/user/user-info');
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );