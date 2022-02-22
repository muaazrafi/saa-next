import {
  createSlice
} from '@reduxjs/toolkit';
import moment from "moment";
import { createBooking } from './services/booking';
import Price from 'library/Price';

const initialState = {
  booking: {
    id: null,
    apartment_id: null,
    check_in: null,
    check_out: null,
    number_of_room_mates: 1,
    was_availability_request: false,
    check_availability_request: false
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
  bookingForm: false,
  requestToBook: false,
  loading: false,
  waitUserToLogin: false
}

export const bookingSlice = createSlice({
  name: 'apartment',
  initialState,
  reducers: {
    updateBooking: (state, action) => {
      state.booking = action.payload;
    },
    updatePrice: (state, action) => {
      let price;
      if ((state.booking.check_in != undefined) && (state.booking.check_out != undefined) && (action.payload != undefined) && (action.payload.reservation_deposit)) {
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
      } else if ((state.booking.check_in != undefined) && (state.booking.check_out != undefined) && (action.payload != undefined)) {
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
  extraReducers: (builder) => {
    builder.addCase(createBooking.fulfilled, (state, action) => {
      state.booking.id = action.payload.booking.id;
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { updatePrice, updateBooking } = bookingSlice.actions;

export default bookingSlice.reducer;