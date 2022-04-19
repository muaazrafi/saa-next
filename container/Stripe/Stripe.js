import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.stripePubKey);

const Stripe = (props) => {
  return <Elements stripe={stripePromise}>{props.children}</Elements>;
};

export default Stripe;
