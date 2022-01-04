import {
  createAsyncThunk,
} from '@reduxjs/toolkit';

export const fetchApartments = createAsyncThunk(
  'apartments/fetchApartments',
  async (search, thunkAPI) => {
    const response = await fetch(`/api/apartments.json?q=${JSON.stringify(search)}`).then((res) => {
      return res.json()
    });
    return response;
  }
)

export const fetchApartment = createAsyncThunk(
  'apartments/fetchApartment',
  async (slug, thunkAPI) => {
    const response = await fetch(`/api/apartments/${slug}.json`).then((res) => {
      return res.json()
    });
    return response.apartment;
  }
)

