import React, { useEffect } from "react";
import { cloneDeep, range } from "lodash";
import moment from "moment";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import HtmlLabel from "components/UI/HtmlLabel/HtmlLabel";
import DatePickerRange from "components/UI/DatePicker/ReactDates";
import { Row, Col, Select } from "antd";
import { updateBooking } from "/store/bookingSlice";
import { handlePopUp } from "/store/authSlice";
import { createBooking } from "/store/services/booking";

import ReservationFormWrapper, {
  FormActionArea,
  FieldWrapper,
} from "./Reservation.style.js";

const { Option } = Select;

const RenderReservationForm = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);  
  const { apartment } = useSelector((state) => state.apartment);
  const { booking } = useSelector((state) => state.booking);

  useEffect( () => {
    if (apartment) {
      const canBook = bookNow();
      let updatedBooking = cloneDeep(booking);
      updatedBooking.apartment_id = apartment.id;
      updatedBooking.was_availability_request = !canBook;
      updatedBooking.check_availability_request = !canBook;
      dispatch(
        updateBooking(updatedBooking)
      );
    }
  }, [apartment])

  useEffect( () => {
    if (currentUser && booking && booking.waitUserToLogin) {
      reCallTheBookingProcedure(false);
      handleBooking();
    }
  }, [currentUser]);

  const disableDates = (current) => {
    if (current && current.valueOf() < Date.now()) {
      return true;
    }
    if (apartment && apartment.occupied_dates) {
      return apartment.occupied_dates.includes(current.format("YYYY/MM/DD"));
    }
  };

  const dateSelection = (startDate, endDate) => {
    let updatedBooking = cloneDeep(booking);
    updatedBooking.check_in = startDate;
    updatedBooking.check_out = endDate; 
    dispatch(
      updateBooking(updatedBooking)
    );
  };

  const reCallTheBookingProcedure = (state) => {
    let updatedBooking = cloneDeep(booking);
    updatedBooking.waitUserToLogin = state; 
    dispatch(
      updateBooking(updatedBooking)
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentUser) {
      reCallTheBookingProcedure(true);
      dispatch(handlePopUp(true));
    } else {
      handleBooking();
    }
  };

  const handleBooking = () => {
    dispatch(createBooking(booking));
    // Thanks for requesting, our landlords typically respond within 48 hours to respond to booking requests.
  }

  const bookingBtnState = () => {
    return !(
      apartment &&
      booking.check_in &&
      booking.check_out &&
      (rangeOverlaps() || !minStayRequired())
    );
  };

  const rangeOverlaps = () => {
    if (
      apartment.occupancies.length == 0 ||
      booking.check_in == null ||
      booking.check_out == null
    ) {
      return false;
    } else {
      for (let occupancy of Array.from(apartment.occupancies)) {
        if (
          dateRangeOverlaps(
            Date.parse(occupancy.from),
            Date.parse(occupancy.to),
            Date.parse(booking.check_in),
            Date.parse(booking.check_out)
          )
        ) {
          return true;
        }
      }
      return false;
    }
  };

  let dateRangeOverlaps = (a_start, a_end, b_start, b_end) => {
    if (a_start <= b_start && b_start <= a_end) {
      return true;
    }
    if (a_start <= b_end && b_end <= a_end) {
      return true;
    }
    if (b_start < a_start && a_end < b_end) {
      return true;
    }
    return false;
  };

  const minStayRequired = () => {
    let checkinDate = moment(booking.check_in, "MM/DD/YYYY");
    let checkoutDate = moment(booking.check_out, "MM/DD/YYYY");
    let staydiff = checkoutDate.diff(checkinDate, "days");
    const minDays = Math.max(apartment.minimum_stay, 30);
    return staydiff < minDays - 1;
  };

  const bookNow = () => {
    return apartment && apartment.availability_status === 'available' && apartment.updated_in_past_month;
  }

  return (
    <ReservationFormWrapper className="form-container" onSubmit={handleSubmit}>
      <FieldWrapper>
        <Row style={{ padding: "0px 20px" }}>
          <Col span="18">
            <HtmlLabel htmlFor="dates" content="Dates" />
            <DatePickerRange
              startDateId="checkin-Id"
              endDateId="checkout-id"
              startDatePlaceholderText="Check In"
              endDatePlaceholderText="Check Out"
              updateSearchData={(value) => updateSearchDataFunc(value)}
              numberOfMonths={1}
              selectDates={dateSelection}
              small
              isDayBlocked={disableDates}
            />
          </Col>
          <Col span="6" style={{ textAlign: "center" }}>
            <HtmlLabel htmlFor="guests" content="Guests" />
            <Select
              labelInValue
              defaultValue={{ value: "1" }}
              class="guest-selector"
            >
              {range(1, 11).map((guest) => {
                return <Option value={guest}>{guest}</Option>;
              })}
            </Select>
          </Col>
        </Row>
      </FieldWrapper>
      <FormActionArea style={{ padding: "0px 20px" }}>
        <Button htmlType="submit" type="primary" disabled={bookingBtnState()}>
          { bookNow() ? 'Book Now' : 'Request to Book' }  
        </Button>
      </FormActionArea>
    </ReservationFormWrapper>
  );
};

export default RenderReservationForm;
