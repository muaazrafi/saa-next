import {
  createSlice
} from '@reduxjs/toolkit';
import { create, show } from './services/card';

const initialState = {
  card: null,
  loading: true,
  moveStep: false
}

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    handleLoading: (state, action) => {
      state.loading = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(create.fulfilled, (state, action) => {
      state.moveStep = true;
      state.loading = false;
    });
    builder.addCase(show.fulfilled, (state, action) => {
      state.card = action.payload.user;
      state.loading = false;
    });
  },
});

export const { handleLoading } = cardSlice.actions;

export default cardSlice.reducer;