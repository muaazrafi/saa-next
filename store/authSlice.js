import {
  createSlice
} from '@reduxjs/toolkit';
import { authenticate, fetchMe, unAuthenticate, register, updateMe } from './services/auth';
import { notification } from 'antd';

const initialState = {
  currentUser: null,
  popUp: false,
  auth_component_switch: "up",
  existError: false,
  loading: true,
  tempPhone: null,
  moveStep: false
};


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handlePopUp: (state, action) => {
      state.popUp = action.payload;
    },
    handleLoading: (state, action) => {
      state.loading = action.payload;
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
    setTempPhone: (state, action) => {
      state.tempPhone = action.payload
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
    
    builder.addCase(unAuthenticate.fulfilled, (state, action) => {
      state.loading = false;
      state.currentUser = null;
    });
    
    builder.addCase(register.fulfilled, (state, action) => {
      if (action.payload.error) {
        state.existError = true;
      } else {
        state.popUp = false;
        state.currentUser = action.payload;
        notification['success']({
          message: 'Successful',
          description:
            'You are successfully registered.',
        });
      }
      state.loading = false;
    });
    
    builder.addCase(updateMe.fulfilled, (state, action) => {
      if (action.payload.error) {
        state.existError = true;
      } else {
        state.currentUser = action.payload;
        state.moveStep = true;
      }
      state.loading = false;
    });    
    
  },
});

// Action creators are generated for each case reducer function
export const { switchin, switchup, switchforgot, handlePopUp, handleLoading, setTempPhone } = authSlice.actions;

export default authSlice.reducer;