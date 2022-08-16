import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHelpSubCategories = createAsyncThunk(
  "help-sub-articles/fetchHelpSubCategories",
  async (search, thunkAPI) => {
    const response = await fetch(
      `/api/help_categories/2/help_sub_categories.json`,
    ).then((res) => {
      return res.json();
    });
    return response;
  },
);
