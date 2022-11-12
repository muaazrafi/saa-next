import {
  createSlice
} from '@reduxjs/toolkit';
import {
  create,
  show
} from './services/card';
import {
  fetchPromoCode
} from './services/promoCode';
import {
  updateBooking
} from './services/booking';
import {
  notification
} from 'antd';
import { isEmpty } from 'lodash';
const initialState = {
  card: null,
  loading: false,
  moveStep: false,
  error: '',
  promoCode: null,
  promoCodeError: ''
}

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    handleLoading: (state, action) => {
      state.loading = action.payload;
    },
    changeMoveStep: (state, action) => {
      state.moveStep = action.payload;
    },
    setError: (state, action) => {
      notification["error"]({
        message: "Payment Proccesing Error!",
        description: action.payload,
      });
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(create.fulfilled, (state, action) => {
      const {
        error
      } = action.payload;
      if (error) {
        notification["error"]({
          message: "Payment Proccesing Error!",
          description: error,
        });
        state.loading = false;
        state.error = error;
      } else {
        state.moveStep = true;
        state.loading = false;
        state.card = null;
      }
    });
    builder.addCase(show.fulfilled, (state, action) => {
      state.card = action.payload.user;
      state.loading = false;
    });
    builder.addCase(fetchPromoCode.fulfilled, (state, action) => {
      if (isEmpty(action.payload)) {
        state.promoCodeError = 'Please enter valid promo code.';
      } else {
        state.promoCode = action.payload;
        state.promoCodeError = '';
      }
      state.loading = false;
    });
    builder.addCase(updateBooking.fulfilled, (state, action) => {
      state.loading = false;
    });
  },
});

export const {
  handleLoading,
  changeMoveStep,
  setError
} = cardSlice.actions;

export default cardSlice.reducer;