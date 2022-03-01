import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Stepper from "components/UI/Stepper/Stepper";
import VerifyAuth from "container/Auth/VerifyAuth";
import { fetchApartment } from "store/services/apartment";
import { FormContent } from "./Steps.style";
import ConfirmPayment from 'container/Payment/ConfirmPayment';

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe("pk_test_oJYwZZaKNdW0Qzl1asjCwD9B");

const StepThree = (props) => {
  const dispatcher = useDispatch();
  const { apartment } = useSelector((state) => state.apartment);
  const { currentUser } = useSelector((state) => state.auth);
  const apartmentLoading = useSelector((state) => state.apartment.loading);
  const router = useRouter();
  const apartment_id = router.query.apartment;
  const booking_id = router.query.booking;

  useEffect(() => {
    if (apartment_id) {
      dispatcher(fetchApartment(apartment_id));
    }
  }, [apartment_id]);

  useEffect(() => {
    if (booking_id) {
    }
  }, [booking_id]);

  useEffect(() => {
    if (currentUser) {
    }
  }, [currentUser]);

  return (
    <FormContent>
      <Stepper step={2} />
      <VerifyAuth />
      <Elements stripe={stripePromise}>
        <ConfirmPayment bookingId={booking_id} />      
      </Elements>
    </FormContent>
  );
}

export default StepThree;