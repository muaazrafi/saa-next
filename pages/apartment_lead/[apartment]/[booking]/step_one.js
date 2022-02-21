import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';
import { notification } from 'antd';

import VerifyAuth from 'container/Auth/VerifyAuth';
import { fetchApartment } from "store/services/apartment";

export default function StepOne(props) {
  const dispatcher = useDispatch();
  const { apartment, loading } = useSelector((state) => state.apartment);

  return (
    <>
      <VerifyAuth />
      Dil Karta
    </>
  );
}