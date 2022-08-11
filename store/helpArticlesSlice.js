import { createSlice } from "@reduxjs/toolkit";
import { fetchHelpArticles } from "./services/help-articles";

const initialState = {
  helpArticles: [],
  loading: false,
};

export const helpArticlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    handleLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHelpArticles.fulfilled, (state, action) => {
      state.helpArticles = action.payload;
      state.loading = false;
    });
  },
});

export const { handleLoading } = helpArticlesSlice.actions;

export default helpArticlesSlice.reducer;
