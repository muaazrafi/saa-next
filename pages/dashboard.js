import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';
import { notification } from "antd";
import VerifyAuth from "container/Auth/VerifyAuth";
import { FormContent } from "/container/Stylis/InnerContainer.style";

const Dashboard = (props) => {
  const router = useRouter();
  const apartmentId = router.query.apartment;
  const bookingId = router.query.booking;
  const { currentUser, moveStep } = useSelector((state) => state.auth);

  useEffect( () => {
    if (moveStep){
      router.push(`/apartment_lead/${apartmentId}/${bookingId}/step_two`);
      notification['success']({
        message: 'Successfully Updated',
        description:
          'Please enter payment details.',
      });
    }
  }, [moveStep]);

  return (
    <FormContent>
      <VerifyAuth />
      
    </FormContent>
  );
};

export default Dashboard;
