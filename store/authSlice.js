import {
  createSlice
} from '@reduxjs/toolkit';

const initialState = {
  auth_component_switch: null,
} 


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    switchtrue: (state) => {
      state.auth_component_switch = true
    },
    switchfalse: (state) => {
      state.auth_component_switch = false
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { switchtrue, switchfalse } = authSlice.actions

export default authSlice.reducer