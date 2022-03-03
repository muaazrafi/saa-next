import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';
import { notification } from "antd";
import Stepper from "components/UI/Stepper/Stepper";
import VerifyAuth from "container/Auth/VerifyAuth";
import UpdateInfo from "container/Auth/UpdateInfo";
import { FormContent } from "./Steps.style";
import Cart from "container/Cart/Cart";

const StepOne = (props) => {
  const router = useRouter();
  const { currentUser, moveStep } = useSelector((state) => state.auth);
  const { apartment } = useSelector((state) => state.apartment);
  const { booking } = useSelector((state) => state.booking);

  useEffect( () => {
    if (moveStep){
      router.push(`/apartment_lead/${apartment.id}/${booking.id}/step_two`);
      notification['success']({
        message: 'Successfully Updated',
        description:
          'Please enter payment details.',
      });
    }
  }, [moveStep])

  return (
    <FormContent>
      <Cart />
      <Stepper step={0} />
      <VerifyAuth />
      {currentUser && <UpdateInfo user={currentUser} />}
    </FormContent>
  );
};

export default StepOne;
