import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Stepper from "components/UI/Stepper/Stepper";
import VerifyAuth from "container/Auth/VerifyAuth";
import UpdateInfo from "container/Auth/UpdateInfo";
import { FormContent } from "./Steps.style";
import Cart from "container/Cart/Cart";

const StepOne = (props) => {
  const { currentUser } = useSelector((state) => state.auth);
  
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
