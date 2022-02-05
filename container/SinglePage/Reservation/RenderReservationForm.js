import React, { useState } from 'react';
import { Button } from 'antd';
import { useSelector } from 'react-redux';
import HtmlLabel from 'components/UI/HtmlLabel/HtmlLabel';
import DatePickerRange from 'components/UI/DatePicker/ReactDates';
import ReservationFormWrapper, {
  FormActionArea,
  FieldWrapper,
  RoomGuestWrapper,
  ItemWrapper,
} from './Reservation.style.js';

const RenderReservationForm = () => {
  const { apartment } = useSelector( (state) => state.apartment )

  const [formState, setFormState] = useState({
    startDate: null,
    endDate: null,
    guest: 0,
  });

  const disableDates = (current) => {
    if (current && current.valueOf() < Date.now()) {
      return true;
    }
    if ( apartment && apartment.occupied_dates ) {
      return apartment.occupied_dates.includes(current.format("YYYY/MM/DD"));
    }
  }

  const dateSelection = (startDate, endDate) => {
    setFormState({
      startDate: startDate,
      endDate: endDate
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <ReservationFormWrapper className="form-container" onSubmit={handleSubmit}>
      <FieldWrapper>
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

      </FieldWrapper>
      {/* <FieldWrapper>
        <HtmlLabel htmlFor="guests" content="Guests" />
        <ViewWithPopup
          key={200}
          noView={true}
          className={formState.room || formState.guest ? 'activated' : ''}
          view={
            <Button type="default">
              <span>Room {formState.room > 0 && `: ${formState.room}`}</span>
              <span>-</span>
              <span>Guest{formState.guest > 0 && `: ${formState.guest}`}</span>
            </Button>
          }
          popup={
            <RoomGuestWrapper>
              <ItemWrapper>
                <strong>Room</strong>
                <InputIncDec
                  id="room"
                  increment={() => handleIncrement('room')}
                  decrement={() => handleDecrement('room')}
                  onChange={(e) => handleIncDecOnChnage(e, 'room')}
                  value={formState.room}
                />
              </ItemWrapper>

              <ItemWrapper>
                <strong>Guest</strong>
                <InputIncDec
                  id="guest"
                  increment={() => handleIncrement('guest')}
                  decrement={() => handleDecrement('guest')}
                  onChange={(e) => handleIncDecOnChnage(e, 'guest')}
                  value={formState.guest}
                />
              </ItemWrapper>
            </RoomGuestWrapper>
          }
        />
      </FieldWrapper> */}
      <FormActionArea>
        <Button htmlType="submit" type="primary">
          Book Hotel
        </Button>
      </FormActionArea>
    </ReservationFormWrapper>
  );
};

export default RenderReservationForm;
