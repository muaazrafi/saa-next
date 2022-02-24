import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Stepper from "components/UI/Stepper/Stepper";
import VerifyAuth from "container/Auth/VerifyAuth";
import { fetchApartment } from "store/services/apartment";
import UpdateInfo from 'container/Auth/UpdateInfo';
import { FormContent } from "./Steps.style";


export default function StepOne(props) {
  const dispatcher = useDispatch();
  const { apartment } = useSelector((state) => state.apartment);
  const { currentUser } = useSelector((state) => state.auth);
  const apartmentLoading = useSelector((state) => state.apartment.loading);
  const router = useRouter();
  const apartment_id = router.query.apartment;
  const booking_id = router.query.apartment;

  useEffect(() => {
    if (apartment_id) {
      dispatcher(fetchApartment(apartment_id));
    }
  }, [apartment_id]);

  useEffect(() => {
    if (booking_id) {
    }
  }, [booking_id]);
  
  useEffect(() => {
    if (currentUser) {

    } 
  }, [currentUser]);

  return (
    <FormContent>
      <Stepper step={0} />
      <VerifyAuth />
      { currentUser && <UpdateInfo user={currentUser} /> }
    </FormContent>
  );
}
