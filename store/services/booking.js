import {
  createAsyncThunk,
} from '@reduxjs/toolkit';

export const createBooking = createAsyncThunk(
  'booking/create',
  async (booking, thunkAPI) => {
    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        booking: booking 
      })
    }).then((res) => {
      return res.json()
    });
    return response;
  }
)
