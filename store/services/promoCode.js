import {
  createAsyncThunk,
} from '@reduxjs/toolkit';

export const fetchPromoCode = createAsyncThunk(
  'booking/promoCode',
  async (code, thunkAPI) => {
    try {
      const response = await fetch(`/api/promo_codes/${code}.json`).then((res) => {
        return res.json()
      });
      return response;
    } catch (error) {
      return {}
    }
  }
)
