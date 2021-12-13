import {
  createSlice
} from '@reduxjs/toolkit';
import { fetchApartments } from './services/apartment';

const initialState = {
  apartments: [],
  loading: true
}

export const apartmentsSlice = createSlice({
  name: 'apartments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApartments.fulfilled, (state, action) => {
      state.apartments = action.payload;
      state.loading = false;
    });
  },
});

export default apartmentsSlice.reducer;