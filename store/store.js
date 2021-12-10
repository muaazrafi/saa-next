import { configureStore } from '@reduxjs/toolkit';
import apartmentSlice from './apartmentsSlice';

export const store = configureStore({
  reducer: {
    apartments: apartmentSlice,
  },
})