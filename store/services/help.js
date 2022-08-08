import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
  "help/fetchCategories",
  async (search, thunkAPI) => {
    const response = await fetch(`/api/help_categories.json`).then((res) => {
      return res.json();
    });
    return response;
  },
);
