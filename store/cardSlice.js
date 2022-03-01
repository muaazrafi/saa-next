import {
  createSlice
} from '@reduxjs/toolkit';
import { create } from './services/card';

const initialState = {
  card: null,
  loading: true
}

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(create.fulfilled, (state, action) => {
      state.loading = false;
    });
  },
});

export default cardSlice.reducer;