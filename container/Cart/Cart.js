import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
import { Row, Col } from 'antd';
import { updatePrice } from 'store/bookingSlice';
import { fetchApartment } from "store/services/apartment";
import { fetchBooking } from "store/services/booking";

const Cart = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const apartmentId = router.query.apartment;
  const bookingId = router.query.booking;

  const { apartment } = useSelector((state) => state.apartment);
  const { booking } = useSelector((state) => state.booking);

  useEffect(() => {
    if (apartmentId && !apartment ) {
      dispatch(fetchApartment(apartmentId));
    }
  }, [apartmentId]);

  useEffect(() => {
    console.log("Let's see Booking: ", booking);
    if (bookingId && !booking.id) {
      dispatch(fetchBooking(bookingId));
    }
  }, [bookingId]);

  useEffect( () => {
    if (apartment && booking.id) {
      dispatch(updatePrice(apartment));
    }
  }, [booking, apartment]);

  return (
    <Row>
      Let's see
    </Row>
  )
}

export default Cart;