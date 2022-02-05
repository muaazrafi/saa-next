import {
  createSlice
} from '@reduxjs/toolkit';

const initialState = {
  apartmentId: null,
  startDate: null,
  endDate: null,
  loading: false
}

export const bookingSlice = createSlice({
  name: 'apartment',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addCase(fetchApartment.fulfilled, (state, action) => {
  //     state.apartment = action.payload;
  //     state.loading = false;
  //   });
  // },
});

export default bookingSlice.reducer;