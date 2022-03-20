import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Row, Col } from 'antd';
import VerifyAuth from "container/Auth/VerifyAuth";
import ResendConfirmation from "/container/Auth/ResendConfirmation";
import Nav from "/container/Dashboard/Nav";
import { FormContent } from "/container/Stylis/InnerContainer.style";
import { fetchActiveBooking } from "store/services/booking";
import Split from "/container/Booking/Split";

const Dashboard = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchActiveBooking(id));
    }
  }, []);

  return (
    <>
      <VerifyAuth />
      <ResendConfirmation />
      <FormContent>
        <Nav current="bookings" />
        <h3>Complete Your Payment</h3>
        <Row gutter={10}>
          <Col md={12} sm={24} xs={24}>
            <Split />
          </Col>
          <Col md={12} sm={24} xs={24}>

          </Col>
        </Row>

      </FormContent>
    </>
  );
};

export default Dashboard;
