import {
  createSlice
} from '@reduxjs/toolkit';
import { authenticate, fetchMe } from './services/auth';
import { notification } from 'antd';
const initialState = {
  currentUser: null,
  popUp: false,
  auth_component_switch: "",
  existError: false,
  loading: true
};


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handlePopUp: (state, action) => {
      state.popUp = action.payload;
    },
    switchin: (state) => {
      state.auth_component_switch = "in"
    },
    switchup: (state) => {
      state.auth_component_switch = "up"
    },
    switchforgot: (state) => {
      state.auth_component_switch = "forgot"
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authenticate.fulfilled, (state, action) => {
      if (action.payload.error) {
        state.existError = true;
      } else {
        state.popUp = false;
        state.currentUser = action.payload.user;
        notification['success']({
          message: 'Successful',
          description:
            'You are successfully logged in.',
        });
      }
    });

    builder.addCase(fetchMe.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.currentUser = action.payload;
      }
    });    
    
  },
});

// Action creators are generated for each case reducer function
export const { switchin, switchup, switchforgot, handlePopUp } = authSlice.actions;

export default authSlice.reducer;