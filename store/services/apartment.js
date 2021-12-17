import {
  createAsyncThunk,
} from '@reduxjs/toolkit';

export const fetchApartments = createAsyncThunk(
  'apartments/fetchApartments',
  async (thunkAPI) => {
    const response = await fetch('/api/apartments.json?q=%7B%22property_city_matches%22:%22barcelona%22,%22number_of_max_occupants_gteq%22:%22%22,%22page%22:0,%22property_area_in%22:%5B%5D,%22apart_type_eq%22:null,%22startDate%22:null,%22endDate%22:null,%22lat%22:%22%22,%22lng%22:%22%22%7D').then((res) => {
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

