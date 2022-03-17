import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VerifyAuth from "container/Auth/VerifyAuth";
import ResendConfirmation from "/container/Auth/ResendConfirmation";
import Nav from "/container/Dashboard/Nav";
import { FormContent } from "/container/Stylis/InnerContainer.style";
import History from "/container/Booking/History";
import { fetchBookings } from "store/services/booking";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.booking);
  useEffect(() => {
    if (bookings.length === 0) {
      dispatch(fetchBookings());
    }
  }, []);

  return (
    <>
      <VerifyAuth />
      <ResendConfirmation />
      <FormContent>
        <Nav current="bookings" />
        <br />
        <h3>Booking History</h3>
        <History />
      </FormContent>
    </>
  );
};

export default Dashboard;
