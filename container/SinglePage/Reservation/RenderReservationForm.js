import React, { useEffect } from "react";
import { cloneDeep, range } from "lodash";
import moment from "moment";
import NoSSR from "react-no-ssr";
import { Alert, Button, notification } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import HtmlLabel from "components/UI/HtmlLabel/HtmlLabel";
import DatePickerRange from "components/UI/DatePicker/ReactDates";
import { Row, Col, Select } from "antd";
import { updateBooking, handleLoading } from "/store/bookingSlice";
import { handlePopUp } from "/store/authSlice";
import { createBooking } from "/store/services/booking";

import ReservationFormWrapper, {
  FormActionArea,
  FieldWrapper,
} from "./Reservation.style.js";

const { Option } = Select;

const RenderReservationForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentUser } = useSelector((state) => state.auth);
  const { apartment } = useSelector((state) => state.apartment);
  const { booking, loading, moveOver } = useSelector((state) => state.booking);
  const { startDate, endDate } = router.query;

  useEffect(() => {}, []);

  useEffect(() => {
    if (apartment) {
      const canBook = bookNow();
      let updatedBooking = cloneDeep(booking);
      if (startDate && endDate) {
        updatedBooking.check_in = moment(startDate);
        updatedBooking.check_out = moment(endDate);
      }
      updatedBooking.apartment_id = apartment.id;
      updatedBooking.was_availability_request = !canBook;
      updatedBooking.check_availability_request = !canBook;
      dispatch(updateBooking(updatedBooking));
    }
  }, [apartment]);

  useEffect(() => {
    if (currentUser && booking && booking.waitUserToLogin) {
      reCallTheBookingProcedure(false);
      handleBooking();
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser && booking && booking.id && moveOver && bookNow()) {
      notification["success"]({
        message: "Booking Initiated",
        description: "Booking successfully initiated, please proceed.",
      });
      router.push(`/apartment_lead/${apartment.id}/${booking.id}/step_one`);
    }
  }, [booking]);

  useEffect(() => {
    if (currentUser && booking && booking.id && !bookNow()) {
      notification["success"]({
        message: "Booking Request Sent",
        description:
          "Booking request successfully sent, will notify you once approved from landlord.",
      });
      dispatch(
        updateBooking({
          id: null,
          apartment_id: null,
          check_in: null,
          check_out: null,
          number_of_room_mates: null,
          was_availability_request: false,
          check_availability_request: false,
          move: false,
        })
      );
    }
  }, [booking]);

  const disableDates = (current) => {
    if (current && current.valueOf() < Date.now()) {
      return true;
    }
    if (current && current.valueOf() <= moment(apartment.available_from)) {
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
    dispatch(updateBooking(updatedBooking));
  };

  const guestSelection = (guests) => {
    let updatedBooking = cloneDeep(booking);
    updatedBooking.number_of_room_mates = guests.value;
    dispatch(updateBooking(updatedBooking));
  };

  const reCallTheBookingProcedure = (state) => {
    let updatedBooking = cloneDeep(booking);
    updatedBooking.waitUserToLogin = state;
    dispatch(updateBooking(updatedBooking));
  };

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
    dispatch(handleLoading(true));
    dispatch(createBooking(booking));
    // Thanks for requesting, our landlords typically respond within 48 hours to respond to booking requests.
  };

  const bookingBtnState = () => {
    return (
      apartment &&
      apartment.availability_status === "available" &&
      booking.check_in &&
      booking.check_out &&
      booking.number_of_room_mates &&
      (rangeOverlaps() || minStayRequired())
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
    return (
      apartment &&
      apartment.availability_status === "available" &&
      apartment.updated_in_past_month 
    );
  };

  return (
    <ReservationFormWrapper className="form-container" onSubmit={handleSubmit}>
      <FieldWrapper>
        <Row style={{ padding: "0px 20px" }}>
          <Col span="18">
            <HtmlLabel htmlFor="dates" content="Dates" />
            <NoSSR>
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
            </NoSSR>
          </Col>
          <Col span="6" style={{ textAlign: "center" }}>
            <HtmlLabel htmlFor="guests" content="Guests" />
            <Select
              labelInValue
              defaultValue={{ value: '' }}
              className="guest-selector"
              getPopupContainer={(trigger) => trigger.parentNode}
              onSelect={ (value) => guestSelection(value) }
            >
              {apartment &&
                range(1, apartment.number_of_max_occupants + 1).map((guest) => {
                  return <Option value={guest}>{guest}</Option>;
                })}
            </Select>
          </Col>
        </Row>
      </FieldWrapper>
      <div style={{ padding: "0px 20px", marginBottom: "10px" }}>
        {rangeOverlaps() && (
          <Alert
            message="Already booked, please select different dates."
            type="error"
            style={{ padding: "10px 20px", marginBottom: "5px" }}
            showIcon
          />
        )}
        {minStayRequired() && (
          <Alert
            message={`Min Stay of ${apartment.minimum_stay} is required.`}
            type="error"
            style={{ padding: "10px 20px" }}
            showIcon
          />
        )}
        {!booking.check_in && !booking.check_out && (
          <Alert
            message={`Check in and out dates missing.`}
            type="error"
            style={{ padding: "10px 20px", marginBottom: '10px' }}
            showIcon
          />
        )}
        {!booking.number_of_room_mates && (
          <Alert
            message={`Please select number of guests.`}
            type="error"
            style={{ padding: "10px 20px" }}
            showIcon
          />
        )}                
      </div>

      <FormActionArea style={{ padding: "0px 20px" }}>
        {apartment && apartment.availability_status === "available" && ['barcelona', 'madrid'].includes(apartment.city) ? (
          <Button
            htmlType="submit"
            type="primary"
            disabled={bookingBtnState() === null}
            loading={loading}
          >
            {bookNow() ? "Book Now" : "Request Availability"}
          </Button>
        ) : (
          <Button
            htmlType="submit"
            type="default"
            disabled={true}
            loading={loading}
            style={{
              width: "100%",
              height: "40px",
              textTransform: "uppercase",
            }}
          >
            Unavailable
          </Button>
        )}
      </FormActionArea>
    </ReservationFormWrapper>
  );
};

export default RenderReservationForm;
