import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Button, notification } from "antd";
import { useStripe } from "@stripe/react-stripe-js";
import { createIntent } from "store/services/card";
import { ConfirmButtonWrapper } from "./Card.style";
import { handleLoading } from 'store/bookingSlice';

const ConfirmPayment = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const bookingId = router.query.booking;

  const { loading } = useSelector( state => state.booking );
  const stripe = useStripe();
  const makeDownPayment = async () => {
    if (!stripe) {
      return;
    }
    dispatch(handleLoading(true));
    const intent = await createIntent(bookingId);
    const { paymentIntent, error } = await stripe.confirmCardPayment(
      intent.client_secret
    );
    dispatch(handleLoading(false));
    if (error) {
      notification['error']({
        message: 'Payment Proccesing Error!',
        description:
          `Please rectify payment details was not able to process payment. ${error}`,
      });
      router.back();
    } else {
      notification['success']({
        message: 'Successfully Sent!',
        description:
          'Booking request pending approval.',
      });
      router.push('/thank-you');
    }
  };

  return (
    <ConfirmButtonWrapper>
      <Button
        type="success"
        size="large"
        block
        onClick={makeDownPayment}
        loading={loading}
      >
        Confirm Booking
      </Button>
    </ConfirmButtonWrapper>
  );
};

export default ConfirmPayment;
