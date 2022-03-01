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

export const show = createAsyncThunk(
  'card/show',
  async (thunkAPI) => {
    const response = await fetch(`/api/cards/0`).then((res) => {
      return res.json()
    });
    return response;
  }
)

export const createIntent = async (bookingID) => {
  const response = await fetch(`/api/cards/${bookingID}/payment_intent.json`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  }).then((res) => {
    return res.json()
  });
  return response;
}
