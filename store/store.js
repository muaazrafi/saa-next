import { configureStore } from '@reduxjs/toolkit';
import apartmentSlice from './apartmentSlice';
import apartmentsSlice from './apartmentsSlice';

export const store = configureStore({
  reducer: {
    apartment: apartmentSlice,
    apartments: apartmentsSlice,
  },
})