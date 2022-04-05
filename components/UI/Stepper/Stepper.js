import React from "react";
import { useSelector } from "react-redux";
import { Steps } from "antd";
import Wrapper from "./Stepper.style";
import { ImProfile } from "react-icons/im";
import { BsCreditCard } from "react-icons/bs";
import { MdDoneAll } from "react-icons/md";

const { Step } = Steps;

const Stepper = ({ step }) => {
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <Wrapper>
      <Steps size="small" current={step}>
        <Step title="Profile" icon={<ImProfile />} />
        <Step
          title="Down Payment"
          icon={<BsCreditCard />}
          className={
            currentUser && !currentUser.must_pay_deposit ? "strike-through" : ""
          }
        />
        <Step title="Finish" icon={<MdDoneAll />} />
      </Steps>
    </Wrapper>
  );
};

export default Stepper;
