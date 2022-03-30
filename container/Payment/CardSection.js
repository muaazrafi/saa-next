import React from "react";
import { useSelector } from "react-redux";
import { CardElement } from "@stripe/react-stripe-js";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};
function CardSection(props) {
  const { error } = useSelector( state => state.card );
  return (
    <>
      <div className="ant-col ant-form-item-label">
        <label
          for="card_details"
          className="ant-form-item-required"
          title="Card Details"
        >
          Card details
        </label>
      </div>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      {error && <div role="alert" class="ant-form-item-explain-error">{error}</div>}
    </>
  );
}
export default CardSection;
