import React from "react";
import { Button } from "antd";
import { useStripe } from "@stripe/react-stripe-js";
import { createIntent } from "store/services/card";
import ApartmentCurrency from "container/SinglePage/ApartmentCurrency/ApartmentCurrency";
import { ConfirmButtonWrapper } from "./Card.style";

const ConfirmPayment = ({ bookingId }) => {
  const stripe = useStripe();
  const makeDownPayment = async () => {
    if (!stripe) {
      return;
    }
    const intent = await createIntent(bookingId);
    const { paymentIntent, error } = await stripe.confirmCardPayment(
      intent.client_secret
    );
  };

  return (
    <ConfirmButtonWrapper>
      <Button
        type="success"
        size="large"
        block
        onClick={makeDownPayment}
        loading={!stripe}
      >
        Confirm Booking
      </Button>
    </ConfirmButtonWrapper>
  );
};

export default ConfirmPayment;
