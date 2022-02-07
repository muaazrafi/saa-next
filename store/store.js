import { configureStore } from '@reduxjs/toolkit';
import apartmentSlice from './apartmentSlice';
import apartmentsSlice from './apartmentsSlice';
import authSlice from './authSlice';
import bookingSlice from './bookingSlice';

export const store = configureStore({
  reducer: {
    apartment: apartmentSlice,
    apartments: apartmentsSlice,
    auth: authSlice,
    booking: bookingSlice
  },
})