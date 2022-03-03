import React from "react";
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
