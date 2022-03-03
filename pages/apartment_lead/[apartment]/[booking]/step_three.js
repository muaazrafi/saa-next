import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Row, Col, Card } from "antd";
import Stepper from "components/UI/Stepper/Stepper";
import VerifyAuth from "container/Auth/VerifyAuth";
import { FormContent } from "./Steps.style";
import ApartmentCurrency from "container/SinglePage/ApartmentCurrency/ApartmentCurrency";
import ConfirmPayment from "container/Payment/ConfirmPayment";
import Cart from "container/Cart/Cart";
import CardDetails from "container/Payment/CardDetails";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_oJYwZZaKNdW0Qzl1asjCwD9B");

const StepThree = (props) => {
  const { currentUser, loading } = useSelector((state) => state.auth);
  const { apartment } = useSelector((state) => state.apartment);
  const { amountDue } = useSelector((state) => state.booking);
  const bookingLoading = useSelector((state) => state.booking.loading);
  const router = useRouter();
  const booking_id = router.query.booking;

  return (
    <FormContent>
      <Cart />
      <Stepper step={2} />
      <VerifyAuth />
      <Elements stripe={stripePromise}>
        <Row gutter={20}>
          <Col md={6} sm={24} xs={24} style={{ marginBottom: "15px" }} loading={bookingLoading} >
            <Card title="Due Today" hoverable>
              <h1>
                <ApartmentCurrency /> 100
              </h1>
            </Card>
          </Col>
          <Col md={6} sm={24} xs={24} style={{ marginBottom: "15px" }} loading={bookingLoading} >
            <Card title="Due after acceptance" hoverable>
              <h1>
                <ApartmentCurrency />
                {apartment &&
                  Math.ceil(amountDue - apartment.booking_request_amount)}
              </h1>
            </Card>
          </Col>
          <Col md={6} sm={24} xs={24} style={{ marginBottom: "15px" }} loading={loading} >
            <Card title="Your information" hoverable>
              {currentUser && (
                <>
                  {currentUser.first_name} {currentUser.last_name}
                  <br />
                  {currentUser.email}
                  <br />
                  {currentUser.phone}
                </>
              )}
            </Card>
          </Col>
          <Col md={6} sm={24} xs={24} style={{ marginBottom: "15px" }}>
            <CardDetails />
          </Col>
        </Row>
        <br />
        <ConfirmPayment bookingId={booking_id} />
        <p>
          By clicking "Confirm Booking" you agree to Study Abroad Apartments <a>privacy policy</a> and <a>terms of service</a>.
          <br />      
          The <ApartmentCurrency />100 down payment will be charged to your card. The remaining <ApartmentCurrency />{Math.ceil(amountDue - apartment.booking_request_amount)} is due no more than three days following the landlord's acceptance of your application.
        </p>
      </Elements>
    </FormContent>
  );
};

export default StepThree;