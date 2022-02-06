import {
  createSlice
} from '@reduxjs/toolkit';


const initialState = {
  booking: {
    apartmentId: null,
    checkIn: null,
    checkOut: null,
  },
  firstMonthRent: null,
  firstMonthIsPartial: null,
  lastMonthIsPartial: null,
  amountDue: null,
  bookingFee: null,
  grandTotal: null,
  monthlyBreakdown: null,
  startOfFirstMonth: null, 
  endOfFirstMonth: null,
  finalDayToPay: null,

  loading: false
}

export const bookingSlice = createSlice({
  name: 'apartment',
  initialState,
  reducers: {
    updatePrice: (state, action) => {
      
    }
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchApartment.fulfilled, (state, action) => {
  //     state.apartment = action.payload;
  //     state.loading = false;
  //   });
  // },
});

export default bookingSlice.reducer;