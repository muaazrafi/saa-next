import { createSlice } from "@reduxjs/toolkit";
import { fetchHelpArticles } from "./services/helpArticles";

const initialState = {
  help_Articles: [],
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
      state.help_Articles = action.payload;
      state.loading = false;
    });
  },
});

export const { handleLoading } = helpArticlesSlice.actions;

export default helpArticlesSlice.reducer;
