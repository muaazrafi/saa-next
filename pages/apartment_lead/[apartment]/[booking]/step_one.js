import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';
import { notification } from "antd";
import Stepper from "components/UI/Stepper/Stepper";
import VerifyAuth from "container/Auth/VerifyAuth";
import UpdateInfo from "container/Auth/UpdateInfo";
import { FormContent } from "container/Stylis/InnerContainer.style";
import Cart from "container/Cart/Cart";

const StepOne = (props) => {
  const router = useRouter();
  const apartmentId = router.query.apartment;
  const bookingId = router.query.booking;
  const { currentUser, moveStep } = useSelector((state) => state.auth);

  useEffect( () => {
    if (moveStep){
      if(currentUser && currentUser.must_pay_deposit) {
        router.push(`/apartment_lead/${apartmentId}/${bookingId}/step_two`);
        notification['success']({
          message: 'Successfully Updated',
          description:
            'Please enter payment details.',
        });        
      } else {
        router.push(`/apartment_lead/${apartmentId}/${bookingId}/step_three`);
        notification['success']({
          message: 'Successfully Updated',
          description:
            'Please confirm booking .',
        });        
      }


    }
  }, [moveStep]);

  return (
    <FormContent>
      <Cart />
      <Stepper step={0} />
      <VerifyAuth />
      {currentUser && <UpdateInfo />}
    </FormContent>
  );
};

export default StepOne;
