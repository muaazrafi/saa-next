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

export const fetchBooking = createAsyncThunk(
  'booking/show',
  async (bookingId, thunkAPI) => {
    const response = await fetch(`/api/bookings/${bookingId}.json`).then((res) => {
      return res.json()
    });
    return response;
  }
)

export const confirmStatus = createAsyncThunk(
  'auth/update',
  async (bookingId, thunkAPI) => {
    const response = await fetch(`/api/bookings/${bookingId}/invitation`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        booking: {
          booking_status: true
        }
      })
    }).then((res) => {
      return res.json()
    });
    return response;
  }
)

