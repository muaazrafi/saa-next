import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { notification } from "antd";
import Stepper from "components/UI/Stepper/Stepper";
import VerifyAuth from "container/Auth/VerifyAuth";
import { FormContent } from "/container/Stylis/InnerContainer.style";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Card from "container/Payment/Card";
import Cart from "container/Cart/Cart";
import { changeMoveStep } from "store/cardSlice";

const stripePromise = loadStripe("pk_test_oJYwZZaKNdW0Qzl1asjCwD9B");

export default function StepTwo(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const apartmentId = router.query.apartment;
  const bookingId = router.query.booking;
  const { currentUser } = useSelector((state) => state.auth);
  const { moveStep } = useSelector((state) => state.card);

  useEffect(() => {
    if (moveStep) {
      dispatch(changeMoveStep(false));
      router.push(`/apartment_lead/${apartmentId}/${bookingId}/step_three`);
      notification["success"]({
        message: "Updated Card Info!",
        description: "Please confirm payment.",
      });
    }
  }, [moveStep]);

  return (
    <FormContent>
      <Cart />
      <Stepper step={1} />
      <VerifyAuth />
      <Elements stripe={stripePromise}>{currentUser && <Card />}</Elements>
    </FormContent>
  );
}
