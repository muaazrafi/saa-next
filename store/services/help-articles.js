import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHelpArticles = createAsyncThunk(
  "help-articles/fetchHelpArticles",
  async (search, thunkAPI) => {
    const response = await fetch(
      `/api/help_categories/1/help_sub_categories.json`,
    ).then((res) => {
      return res.json();
    });
    return response;
  },
);
