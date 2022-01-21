import {
  createAsyncThunk,
} from '@reduxjs/toolkit';

export const authenticate = createAsyncThunk(
  'auth/authenticate',
  async (user, thunkAPI) => {
    const response = await fetch('/users/sign_in.json', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: user 
      })
    }).then((res) => {
      return res.json()
    });
    return response;
  }
)