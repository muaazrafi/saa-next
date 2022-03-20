import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VerifyAuth from "container/Auth/VerifyAuth";
import ResendConfirmation from "/container/Auth/ResendConfirmation";
import Nav from "/container/Dashboard/Nav";
import { FormContent } from "/container/Stylis/InnerContainer.style";
import History from "/container/Booking/History";
import ApprovedBookings from "/container/Booking/ApprovedBookings";
import { fetchBookings, fetchApprovedBookings } from "store/services/booking";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookings());
    dispatch(fetchApprovedBookings());
  }, []);

  return (
    <>
      <VerifyAuth />
      <ResendConfirmation />
      <FormContent>
        <Nav current="bookings" />
        <ApprovedBookings />
        <br />

      </FormContent>
    </>
  );
};

export default Dashboard;
