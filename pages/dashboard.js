import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { useDispatch } from "react-redux";
import VerifyAuth from "container/Auth/VerifyAuth";
import ResendConfirmation from "/container/Auth/ResendConfirmation";
import Nav from "/container/Dashboard/Nav";
import ProfileCard from "container/Auth/ProfileCard";
import CardHolder from "container/Payment/CardHolder";
import ReferralCard from "container/Referral/ReferralCard";
import { fetchMe } from 'store/services/auth';

import { FormContent } from "/container/Stylis/InnerContainer.style";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  
  useEffect( () => {
    dispatch(fetchMe());
  },[]);

  return (
    <>
      <VerifyAuth />
      <ResendConfirmation />
      <FormContent>
        <Nav current="profile" />
        <br />
        <Row gutter={16} className="cardholder">
          <Col md={12} sm={24} xs={24}>
            <ProfileCard />
          </Col>
          <Col md={12} sm={24} xs={24}>
            <CardHolder />
          </Col>
        </Row>
        <br />
        <Row gutter={16} className="cardholder">
          <Col span={24}>
            <ReferralCard />
          </Col>          
        </Row>
      </FormContent>
    </>
  );
};

export default Dashboard;
