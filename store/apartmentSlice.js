import {
  createSlice
} from '@reduxjs/toolkit';
import { fetchApartment } from './services/apartment';

const initialState = {
  apartment: null,
  loading: true
}

export const apartmentSlice = createSlice({
  name: 'apartment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApartment.fulfilled, (state, action) => {
      state.apartment = action.payload;
      state.loading = false;
    });
  },
});

export default apartmentSlice.reducer;