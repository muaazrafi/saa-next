import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Stepper from "components/UI/Stepper/Stepper";
import VerifyAuth from "container/Auth/VerifyAuth";
import { FormContent } from "./Steps.style";

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Card from 'container/Payment/Card';
import Cart from "container/Cart/Cart";

const stripePromise = loadStripe('pk_test_oJYwZZaKNdW0Qzl1asjCwD9B');

export default function StepOne(props) {
  const { currentUser } = useSelector((state) => state.auth);
  const { moveStep } = useSelector((state) => state.card);
  const { apartment } = useSelector((state) => state.apartment);
  const { booking } = useSelector((state) => state.booking);

  useEffect( () => {
    if (moveStep){
      router.push(`/apartment_lead/${apartment.id}/${booking.id}/step_three`);
      notification['success']({
        message: 'Updated Card Info!',
        description:
          'Please confirm payment.',
      });
    }
  }, [moveStep]);  

  return (
    <FormContent>
      <Cart />
      <Stepper step={1} />
      <VerifyAuth />
      <Elements stripe={stripePromise}>
      { currentUser && <Card /> }
      </Elements>
    </FormContent>
  );
}
