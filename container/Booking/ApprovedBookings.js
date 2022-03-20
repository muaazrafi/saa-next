import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ApprovedBooking from './ApprovedBooking';

const ApprovedBookings = (props) => {
  const { approved_bookings, loading } = useSelector((state) => state.booking);

  return (
    <>
      <h3>Your Bookings</h3>    
      {approved_bookings.map( (booking) => {
        return <ApprovedBooking booking={booking} />
      } )}
    </>
  )
}

export default ApprovedBookings;