import {
  createSlice
} from '@reduxjs/toolkit';
import {
  fetchTos,
  fetchPrivacy
} from './services/content';

const initialState = {
  tos: null,
  privacy: null,
  loading: false
}

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    handleLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTos.fulfilled, (state, action) => {
      state.tos = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPrivacy.fulfilled, (state, action) => {
      state.privacy = action.payload;
      state.loading = false;
    });
  },
});

export const {
  handleLoading,
} = contentSlice.actions;

export default contentSlice.reducer;