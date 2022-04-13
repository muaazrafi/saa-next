import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Button, notification } from "antd";
import { useStripe } from "@stripe/react-stripe-js";
import { createIntent } from "store/services/card";
import { confirmStatus } from "/store/services/booking";
import { ConfirmButtonWrapper } from "./Card.style";
import { handleLoading } from "store/bookingSlice";
import { setError } from "store/cardSlice";

const ConfirmPayment = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const apartmentId = router.query.apartment;
  const bookingId = router.query.booking;

  const { loading } = useSelector((state) => state.booking);
  const { currentUser } = useSelector((state) => state.auth);
  const stripe = useStripe();

  const confirmBooking = async () => {
    await confirmStatus(bookingId);
    notification["success"]({
      message: "Successfully Sent!",
      description: "Booking request pending approval.",
    });
    dispatch(handleLoading(false));
    router.push("/thank-you");
  };

  const makeDownPayment = async () => {
    if (!stripe) {
      return;
    }
    dispatch(handleLoading(true));
    const intent = await createIntent(bookingId);
    const { paymentIntent, error } = await stripe.confirmCardPayment(
      intent.client_secret
    );

    if (error) {
      dispatch(setError(error.message));
      dispatch(handleLoading(false));
      router.push(`/apartment_lead/${apartmentId}/${bookingId}/step_two`);
    } else {
      await confirmBooking();
    }
  };

  return (
    <ConfirmButtonWrapper>
      <Button
        type="success"
        size="large"
        block
        onClick={
          currentUser && currentUser.must_pay_deposit
            ? makeDownPayment
            : confirmBooking
        }
        loading={loading}
      >
        Confirm Booking
      </Button>
    </ConfirmButtonWrapper>
  );
};

export default ConfirmPayment;
