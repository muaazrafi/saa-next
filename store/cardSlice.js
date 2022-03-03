import {
  createSlice
} from '@reduxjs/toolkit';
import { create, show } from './services/card';

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
    builder.addCase(show.fulfilled, (state, action) => {
      state.card = action.payload.user;
      state.loading = false;
    });
  },
});

export default cardSlice.reducer;