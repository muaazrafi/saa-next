import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ApprovedBookings = (props) => {
  const { bookings, loading } = useSelector((state) => state.booking);

  return (
    <h3>Payments</h3>
  )
}

export default ApprovedBookings;