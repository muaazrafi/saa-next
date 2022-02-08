import React, { useState } from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import HtmlLabel from "components/UI/HtmlLabel/HtmlLabel";
import DatePickerRange from "components/UI/DatePicker/ReactDates";
import { Row, Col } from "antd";
import { updateDates } from "/store/bookingSlice";
import ReservationFormWrapper, {
  FormActionArea,
  FieldWrapper,
} from "./Reservation.style.js";

const RenderReservationForm = () => {
  const dispatch = useDispatch();
  const { apartment } = useSelector((state) => state.apartment);
  const { booking } = useSelector((state) => state.booking);

  const disableDates = (current) => {
    if (current && current.valueOf() < Date.now()) {
      return true;
    }
    if (apartment && apartment.occupied_dates) {
      return apartment.occupied_dates.includes(current.format("YYYY/MM/DD"));
    }
  };

  const dateSelection = (startDate, endDate) => {
    dispatch(
      updateDates({
        checkIn: startDate,
        checkOut: endDate,
      })
    );
  };

  const handleSubmit = (e) => {
    console.log("Form state current:", formState);
    e.preventDefault();
  };

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
          <Col span="6">
            <HtmlLabel
              htmlFor="guests"
              content="Guests"
              style={{ textAlign: "center" }}
            />
            {/* <Selector
              title="Beds"
              modifier="number_of_beds_gteq"
              icon={<FaBed size={18} />}
              options={range(1, 11)}
            /> */}
          </Col>
        </Row>
      </FieldWrapper>
      <FormActionArea style={{ padding: "0px 20px" }}>
        <Button htmlType="submit" type="primary">
          Book Now
        </Button>
      </FormActionArea>
    </ReservationFormWrapper>
  );
};

export default RenderReservationForm;
