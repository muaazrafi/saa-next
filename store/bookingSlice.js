import {
  createSlice
} from '@reduxjs/toolkit';
import moment from "moment";
import Price from 'library/Price';

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
  surcharge: null,
  extraTenantCharges: null,
  excessTenants: null,
  loading: false
}

export const bookingSlice = createSlice({
  name: 'apartment',
  initialState,
  reducers: {
    updateDates: (state, action) => {
      state.booking = action.payload;
    },
    updatePrice: (state, action) => {
      let price;
      if ((state.booking.checkIn != undefined) && (state.booking.checkOut != undefined) && (action.payload != undefined) && (action.payload.reservation_deposit)) {
        //       //dates selected, apt has res deposit
        price = new Price(action.payload, state.booking);
        state.firstMonthRent = Math.ceil(price.firstMonthRent());
        state.firstMonthIsPartial = price.firstMonthIsPartial();
        state.lastMonthIsPartial = price.lastMonthIsPartial();
        state.amountDue = price.amountDueForFirstMonth() + action.payload.reservation_deposit_amount;
        state.bookingFee = price.saaBookingFee();
        state.grandTotal = price.totalRentWithFees() + state.bookingFee;
        state.monthlyBreakdown = price.monthlyBreakdownAfterFirstMonth();
        state.startOfFirstMonth = moment(price.startOfFirstMonth()).format('MM/DD');
        state.endOfFirstMonth = moment(price.endOfFirstMonth()).format('MM/DD');
        state.finalDayToPay = moment(price.finalDayToPay()).format('MM/DD');
        state.surcharge = price.variedPricingSurcharge();
        state.extraTenantCharges = price.extra_tenant_charges();
        state.excessTenants = price.excess_tenants();
      } else if ((state.booking.checkIn != undefined) && (state.booking.checkOut != undefined) && (action.payload != undefined)) {
        price = new Price(action.payload, state.booking);
        state.firstMonthRent = Math.ceil(price.firstMonthRent());
        state.firstMonthIsPartial = price.firstMonthIsPartial();
        state.lastMonthIsPartial = price.lastMonthIsPartial();
        state.amountDue = price.amountDueForFirstMonth() + action.payload.reservation_deposit_amount;
        state.bookingFee = price.saaBookingFee();
        state.grandTotal = price.totalRentWithFees() + state.bookingFee;
        state.monthlyBreakdown = price.monthlyBreakdownAfterFirstMonth();
        state.startOfFirstMonth = moment(price.startOfFirstMonth()).format('MM/DD');
        state.endOfFirstMonth = moment(price.endOfFirstMonth()).format('MM/DD');
        state.finalDayToPay = moment(price.finalDayToPay()).format('MM/DD');
        state.surcharge = price.variedPricingSurcharge();
        state.extraTenantCharges = price.extra_tenant_charges();
        state.excessTenants = price.excess_tenants();
      } else if ((action.payload != undefined) && (action.payload.reservation_deposit)) {
        //no dates selected, apt has reservation deposit
        state.firstMonthRent = action.payload.display_price;
        state.amountDue = action.payload.display_price + action.payload.default_booking_fee + action.payload.reservation_deposit_amount;
        state.bookingFee = action.payload.default_booking_fee;
      } else if (action.payload != undefined) {
        // no dates selected, nop reservation deposit
        state.firstMonthRent = action.payload.display_price;
        state.amountDue = action.payload.display_price + action.payload.default_booking_fee;
        state.bookingFee = action.payload.default_booking_fee;
      }
    }
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchApartment.fulfilled, (state, action) => {
  //     state.apartment = action.payload;
  //     state.loading = false;
  //   });
  // },
});

// Action creators are generated for each case reducer function
export const { updatePrice, updateDates } = bookingSlice.actions;

export default bookingSlice.reducer;