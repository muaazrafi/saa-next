import {
  createSlice
} from '@reduxjs/toolkit';
import {
  authenticate,
  fetchMe,
  unAuthenticate,
  register,
  updateMe,
  resendConfirmation,
  forgetPassword,
  resetPassword
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
  forgetErrors: [],
  refresh: false,
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
      state.forgetErrors = [];
      state.auth_component_switch = "forgot"
    },
    setTempPhone: (state, action) => {
      state.tempPhone = action.payload
    },
    updateStep: (state, action) => {
      state.moveStep = action.payload
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
        if (action.payload.user.role === "provider") {
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
        state.errors = Object.entries(action.payload.errors);
      } else {
        state.popUp = false;
        state.existError = false;
        state.authFailed = false;
        state.currentUser = action.payload;
        notification['success']({
          message: 'Successful',
          description: 'You are successfully registered.',
        });
        if (action.payload.role === "provider") {
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

    builder.addCase(forgetPassword.fulfilled, (state, action) => {
      if (action.payload.errors) {
        const errors = Object.entries(action.payload.errors);
        state.forgetErrors = [errors.map( (error) => { return `${error[0]} ${error[1][0]}` } ).join(' ')];
      } else {
        state.popUp = false;
        notification['success']({
          message: 'Sent!',
          description: 'Successfully sent reset password instructions, please check your email.',
        });
      }
      state.loading = false;
    });

    builder.addCase(resetPassword.fulfilled, (state, action) => {
      if (action.payload.errors) {
        state.forgetErrors = ['Reset token is not valid. Please reset password again.'];
        state.auth_component_switch = "forgot"
        state.popUp = true;
      } else {
        notification['success']({
          message: 'Successfully reset password',
          description: 'Successfully reset password. Redirecting...',
        });
        state.refresh = true;
      }
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
  setTempPhone,
  updateStep
} = authSlice.actions;

export default authSlice.reducer;