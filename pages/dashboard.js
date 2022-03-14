import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Card } from "antd";
import VerifyAuth from "container/Auth/VerifyAuth";
import ResendConfirmation from "/container/Auth/ResendConfirmation";
import Nav from "/container/Dashboard/Nav";
import ProfileCard from "container/Auth/ProfileCard";
import CardDetails from "container/Payment/CardDetails";
import { FormContent } from "/container/Stylis/InnerContainer.style";

const Dashboard = (props) => {
  const { currentUser, loading } = useSelector((state) => state.auth);

  return (
    <>
      <VerifyAuth />
      <ResendConfirmation />
      <FormContent>
        <Nav current="profile" />
        <br />
        <Row gutter={16} className="cardholder">
          <Col md={8} sm={24} xs={24} loading={loading}>
            <ProfileCard />
          </Col>
          <Col md={8} sm={24} xs={24}>
            <CardDetails />
          </Col>
          <Col key="referal" md={8} sm={24} xs={24}>
            <Card title="Referral Link" hoverable>
              Card content
              <br />
              Card content
              <br />
              Card content
              <br />
            </Card>
          </Col>
        </Row>
      </FormContent>
    </>
  );
};

export default Dashboard;
