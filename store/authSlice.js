import {
  createSlice
} from '@reduxjs/toolkit';

const initialState = {
  auth_component_switch: "",
}; 


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
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
});

// Action creators are generated for each case reducer function
export const { switchin, switchup,switchforgot } = authSlice.actions

export default authSlice.reducer