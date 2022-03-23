import React, { useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Row, Col } from "antd";
import VerifyAuth from "container/Auth/VerifyAuth";
import ResendConfirmation from "/container/Auth/ResendConfirmation";
import Nav from "/container/Dashboard/Nav";
import { FormContent } from "/container/Stylis/InnerContainer.style";
import { fetchActiveBooking } from "store/services/booking";
import AmountPaid from "container/Booking/AmountPaid";
import InviteFriends from "/container/Booking/InviteFriends";
import ShareLink from "/container/Booking/ShareLink";
import Split from "/container/Booking/Split";

const stripePromise = loadStripe("pk_test_oJYwZZaKNdW0Qzl1asjCwD9B");

const Dashboard = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const { booking } = useSelector((state) => state.booking);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchActiveBooking(id));
    }
  }, [id]);

  return (
    <>
      <VerifyAuth />
      <ResendConfirmation />
      {booking && (
        <Elements stripe={stripePromise}>
          <FormContent>
            <Nav current="bookings" />
            <h3>Complete Your Payment</h3>
            <Row gutter={10}>
              <Col md={12} sm={24} xs={24}>
                <Split />
                <br />
                <InviteFriends booking={booking} />
                <br />
                <ShareLink booking={booking} />
              </Col>
              <Col md={12} sm={24} xs={24}>
                {booking && <AmountPaid booking={booking} />}
                <br />
              </Col>
            </Row>
          </FormContent>
        </Elements>
      )}
    </>
  );
};

export default Dashboard;
