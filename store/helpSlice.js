import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "./services/help";

const initialState = {
  categories: [],
  loading: false,
};

export const helpSlice = createSlice({
  name: "help",
  initialState,
  reducers: {
    handleLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    });
  },
});

export const { handleLoading } = helpSlice.actions;

export default helpSlice.reducer;
