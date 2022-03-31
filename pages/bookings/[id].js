import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Card, Row, Col } from "antd";
import { fetchPublicBooking } from "store/services/booking";
import SignUpFormTenant from "container/Auth/SignUp/SignUpFormTenant";
import SignInForm from "container/Auth/SignIn/SignInForm";
import ApartmentDetails from "container/Booking/ApartmentDetails";
import { createSplit } from "/store/services/booking";

const { Content } = Layout;

const InviteBooking = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { booking } = useSelector((state) => state.booking);
  const { currentUser } = useSelector((state) => state.auth);
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      dispatch(fetchPublicBooking(id));
    }
  }, [id]);

  useEffect(() => {
    if (currentUser) {
      dispatch(
        createSplit({
          split: {
            booking_id: booking.id,
            user_id: currentUser.id,
          },
        })
      );
    }
  }, [currentUser]);

  return (
    <Content className="container">
      <Card title="Join the Booking" style={{ marginTop: "25px" }}>
        <Row gutter={20}>
          <Col lg={12} md={24} sm={24} xs={24}>
            <Card title="Join Your Booking">
              <SignUpFormTenant booking={true} />
            </Card>
            <br />
            <Card title="Join Your Booking">
              <SignInForm booking={true} />
            </Card>
          </Col>
          <Col lg={12} md={24} sm={24} xs={24}>
            {booking && <ApartmentDetails booking={booking} />}
          </Col>
        </Row>
      </Card>
    </Content>
  );
};

export default InviteBooking;
