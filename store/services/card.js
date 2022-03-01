import {
  createAsyncThunk,
} from '@reduxjs/toolkit';

export const create = createAsyncThunk(
  'card/create',
  async (token, thunkAPI) => {
    const response = await fetch('/api/cards.json', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        source: token 
      })
    }).then((res) => {
      return res.json()
    });
    return response;
  }
)