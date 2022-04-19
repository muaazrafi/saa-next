import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_oJYwZZaKNdW0Qzl1asjCwD9B");

const Stripe = (props) => {
  return <Elements stripe={stripePromise}>{props.children}</Elements>;
};

export default Stripe;
