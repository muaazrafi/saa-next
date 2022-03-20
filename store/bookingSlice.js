import {
  createSlice
} from '@reduxjs/toolkit';
import moment from "moment";
import { createBooking, fetchBooking, fetchBookings, fetchApprovedBookings, fetchActiveBooking } from './services/booking';
import Price from 'library/Price';

const initialState = {
  bookings: [],
  approved_bookings: [],
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
    handleLoading: (state, action) => {
      state.loading = action.payload;
    },
    updateBooking: (state, action) => {
      state.booking = action.payload;
    },
    updatePrice: (state, action) => {
      let price;
      if ((state.booking.check_in != undefined) && (state.booking.check_out != undefined)  && (action.payload.reservation_deposit)) {
        //       //dates selected, apt has res deposit
        price = new Price(action.payload, state.booking);
        state.firstMonthRent = Math.ceil(price.firstMonthRent());
        state.firstMonthIsPartial = Math.ceil(price.firstMonthIsPartial());
        state.lastMonthIsPartial = Math.ceil(price.lastMonthIsPartial());
        state.amountDue = Math.ceil(price.amountDueForFirstMonth() + action.payload.reservation_deposit_amount);
        state.bookingFee = Math.ceil(price.saaBookingFee());
        state.grandTotal = Math.ceil(price.totalRentWithFees() + state.bookingFee);
        state.monthlyBreakdown = price.monthlyBreakdownAfterFirstMonth();
        state.startOfFirstMonth = moment(price.startOfFirstMonth()).format('MM/DD');
        state.endOfFirstMonth = moment(price.endOfFirstMonth()).format('MM/DD');
        state.finalDayToPay = moment(price.finalDayToPay()).format('MM/DD');
        state.surcharge = Math.ceil(price.variedPricingSurcharge());
        state.extraTenantCharges = Math.ceil(price.extra_tenant_charges());
        state.excessTenants = Math.ceil(price.excess_tenants());
      } else if ((state.booking.check_in != undefined) && (state.booking.check_out != undefined) ) {
        price = new Price(action.payload, state.booking);
        state.firstMonthRent = Math.ceil(price.firstMonthRent());
        state.firstMonthIsPartial = Math.ceil(price.firstMonthIsPartial());
        state.lastMonthIsPartial = Math.ceil(price.lastMonthIsPartial());
        state.amountDue = Math.ceil(price.amountDueForFirstMonth() + action.payload.reservation_deposit_amount);
        state.bookingFee = Math.ceil(price.saaBookingFee());
        state.grandTotal = Math.ceil(price.totalRentWithFees() + state.bookingFee);
        state.monthlyBreakdown = price.monthlyBreakdownAfterFirstMonth();
        state.startOfFirstMonth = moment(price.startOfFirstMonth()).format('MM/DD');
        state.endOfFirstMonth = moment(price.endOfFirstMonth()).format('MM/DD');
        state.finalDayToPay = moment(price.finalDayToPay()).format('MM/DD');
        state.surcharge = Math.ceil(price.variedPricingSurcharge());
        state.extraTenantCharges = Math.ceil(price.extra_tenant_charges());
        state.excessTenants = Math.ceil(price.excess_tenants());
      } else if ((action.payload != undefined) && (action.payload.reservation_deposit)) {
        //no dates selected, apt has reservation deposit
        state.firstMonthRent = action.payload.display_price;
        state.amountDue = Math.ceil(action.payload.display_price + action.payload.default_booking_fee + action.payload.reservation_deposit_amount);
        state.bookingFee = action.payload.default_booking_fee;
      } else if (action.payload != undefined) {
        // no dates selected, nop reservation deposit
        state.firstMonthRent = action.payload.display_price;
        state.amountDue = Math.ceil(action.payload.display_price + action.payload.default_booking_fee);
        state.bookingFee = action.payload.default_booking_fee;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createBooking.fulfilled, (state, action) => {
      state.booking.id = action.payload.booking.id;
      state.loading = false;
    });
    builder.addCase(fetchBooking.fulfilled, (state, action) => {
      state.booking = action.payload.booking;
      state.loading = false;
    });
    builder.addCase(fetchBookings.fulfilled, (state, action) => {
      state.bookings = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchApprovedBookings.fulfilled, (state, action) => {
      state.approved_bookings = action.payload.approved_bookings;
      state.loading = false;
    });
    builder.addCase(fetchActiveBooking.fulfilled, (state, action) => {
      state.booking = action.payload.booking;
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { handleLoading, updatePrice, updateBooking } = bookingSlice.actions;

export default bookingSlice.reducer;