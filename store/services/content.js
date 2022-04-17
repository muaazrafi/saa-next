import {
  createAsyncThunk,
} from '@reduxjs/toolkit';

export const fetchTos = createAsyncThunk(
  'content/fetchTos',
  async (search, thunkAPI) => {
    const response = await fetch('/api/pagers/terms-of-services.json').then((res) => {
      return res.json()
    });
    return response;
  }
)

export const fetchPrivacy = createAsyncThunk(
  'content/fetchPrivacy',
  async (search, thunkAPI) => {
    const response = await fetch('/api/pagers/privacy-policy.json').then((res) => {
      return res.json()
    });
    return response;
  }
)