import React from 'react';
import { Steps } from 'antd';
import Wrapper from './Stepper.style';
import { ImProfile } from 'react-icons/im';
import { BsCreditCard } from 'react-icons/bs';
import { MdDoneAll } from 'react-icons/md';

const { Step } = Steps;

const Stepper = ({ step }) => {
  return (
    <Wrapper>
      <Steps size="small" current={step}>
        <Step title="Profile" icon={<ImProfile />} />
        <Step title="Down Payment" icon={<BsCreditCard />} />
        <Step title="Finish" icon={<MdDoneAll />} />
      </Steps>
    </Wrapper>

  )
}

export default Stepper;