import React from 'react';
import { Steps } from 'antd';
import Wrapper from './Stepper.style';

const { Step } = Steps;

const Stepper = ({ step }) => {
  return (
    <Wrapper>
      <Steps size="small" current={step}>
        <Step title="Profile" />
        <Step title="Down Payment" />
        <Step title="Finish" />
      </Steps>
    </Wrapper>

  )
}

export default Stepper;