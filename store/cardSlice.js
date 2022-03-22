import {
  createSlice
} from '@reduxjs/toolkit';
import { create, show } from './services/card';
import { notification } from 'antd';
const initialState = {
  card: null,
  loading: true,
  moveStep: false
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
    }
  },
  extraReducers: (builder) => {
    builder.addCase(create.fulfilled, (state, action) => {
      if (action.payload.error) {
        notification["error"]({
          message: "Payment Proccesing Error!",
          description: action.payload.error,
        });
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
  },
});

export const { handleLoading, changeMoveStep } = cardSlice.actions;

export default cardSlice.reducer;