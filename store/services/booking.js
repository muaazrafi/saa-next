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

export const fetchBookings = createAsyncThunk(
  'booking/index',
  async (thunkAPI) => {
    const response = await fetch(`/api/bookings.json`).then((res) => {
      return res.json()
    });
    return response;
  }
)

export const fetchApprovedBookings = createAsyncThunk(
  'booking/approved',
  async (thunkAPI) => {
    const response = await fetch(`/api/bookings/0.json`).then((res) => {
      return res.json()
    });
    return response;
  }
)

export const fetchActiveBooking = createAsyncThunk(
  'booking/active',
  async (bookingId, thunkAPI) => {
    const response = await fetch(`/api/bookings/${bookingId}/own.json`).then((res) => {
      return res.json()
    });
    return response;
  }
);

export const confirmStatus = async (bookingId) => {
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


export const fetchPublicBooking = createAsyncThunk(
  'booking/show',
  async (bookingId, thunkAPI) => {
    const response = await fetch(`/api/bookings/${bookingId}/verify_booking.json`).then((res) => {
      return res.json()
    });
    return response;
  }
)

export const confirmSplit = createAsyncThunk(
  'split/confirm',
  async (intent, thunkAPI) => {
    const response = await fetch(`/api/splits/${intent.bookingID}?payment_intent=${intent.intent.intent_id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(intent.intent)
    }).then((res) => {
      return res.json()
    });
    return response;
  }
)


export const createSplit = createAsyncThunk(
  'split/create',
  async (split, thunkAPI) => {
    const response = await fetch(`/api/splits`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(intent.intent)
    }).then((res) => {
      return res.json()
    });
    return response;
  }
)