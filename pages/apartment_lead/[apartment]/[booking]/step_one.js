import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from 'antd';
import { useRouter } from 'next/router';
import { notification } from 'antd';

import Stepper from 'components/UI/Stepper/Stepper';
import VerifyAuth from 'container/Auth/VerifyAuth';
import { fetchApartment } from "store/services/apartment";
import { FormHeader, Title, FormContent, FormAction } from './Steps.style';

export default function StepOne(props) {
  const dispatcher = useDispatch();
  const { apartment, loading } = useSelector((state) => state.apartment);

  return (
    <FormContent>
      <Stepper step={0} />
      <VerifyAuth />

    </FormContent>
  );
}