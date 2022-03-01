import React from "react";
import { Button } from 'antd';
import { useStripe } from "@stripe/react-stripe-js";
import { createIntent } from "store/services/card";

const ConfirmPayment = ({bookingId}) => {
  const stripe = useStripe();
  const makeDownPayment = async () => {
    if (!stripe) {
      return;
    }
    const intent = await createIntent(bookingId);
    const {paymentIntent, error} = await stripe.confirmCardPayment(intent.client_secret);
    debugger
    console.log("Confirm me")
  };

  return (
    <Button
      type="success"
      size="middle"
      style={{ width: 256 }}
      block
      onClick={makeDownPayment}
      loading={!stripe}
    >
      Confirm
    </Button>
  );
};

export default ConfirmPayment;
