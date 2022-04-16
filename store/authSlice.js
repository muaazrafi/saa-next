import {
  createSlice
} from '@reduxjs/toolkit';
import {
  authenticate,
  fetchMe,
  unAuthenticate,
  register,
  updateMe,
  resendConfirmation
} from './services/auth';
import {
  notification
} from 'antd';

const initialState = {
  currentUser: null,
  popUp: false,
  auth_component_switch: "up",
  loading: true,
  tempPhone: null,
  moveStep: false,
  authFailed: false,
  existError: false,
  errors: [],
  isLandlord: false,
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
        state.authFailed = false;
        notification['success']({
          message: 'Successful',
          description: 'You are successfully logged in.',
        });
        if(action.payload.user.role === "provider") {
          state.isLandlord = true;
        }
      }
    });

    builder.addCase(fetchMe.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.authFailed = false;
        state.currentUser = action.payload;
      } else {
        state.authFailed = true;
      }
    });

    builder.addCase(unAuthenticate.fulfilled, (state, action) => {
      state.loading = false;
      state.currentUser = null;
      state.authFailed = true;
    });

    builder.addCase(register.fulfilled, (state, action) => {
      if (action.payload.errors) {
        state.existError = true;
        state.errors =  Object.entries(action.payload.errors);
      } else {
        state.popUp = false;
        state.existError = false;
        state.authFailed = false;
        state.currentUser = action.payload;
        notification['success']({
          message: 'Successful',
          description: 'You are successfully registered.',
        });
        if(action.payload.role === "provider") {
          state.isLandlord = true;
        }
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

    builder.addCase(resendConfirmation.fulfilled, (state, action) => {

      notification['success']({
        message: 'Sent!',
        description: 'Successfully sent email, please confirm it.',
      });
      state.loading = false;
    });

  },
});

// Action creators are generated for each case reducer function
export const {
  switchin,
  switchup,
  switchforgot,
  handlePopUp,
  handleLoading,
  setTempPhone
} = authSlice.actions;

export default authSlice.reducer;