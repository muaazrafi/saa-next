import React from "react";
import { Row, Col } from "antd";
import ApartmentDetails from "./ApartmentDetails";
import AmountPaid from "./AmountPaid";
import DuePayment from "./DuePayment";
import LandLordInfo from "./LandLordInfo";
import InviteFriends from "./InviteFriends";
import Tenants from "./Tenants";
import ShareLink from "./ShareLink";

const ApprovedBooking = ({ booking }) => {
  return (
    <Row gutter={16}>
      <Col md={12} sm={24} xs={24}>
        {booking.pending_balance === 0 ? (
          <LandLordInfo booking={booking} />
        ) : (
          <DuePayment booking={booking} />
        )}
        <br />
        <AmountPaid booking={booking} />
        <br />
        <InviteFriends booking={booking} />
        <br />
        <ShareLink booking={booking} />
      </Col>
      <Col md={12} sm={24} xs={24}>
        <ApartmentDetails booking={booking} />
        <br />
        <Tenants tenants={booking.splits} currency={booking.currency} />
      </Col>
    </Row>
  );
};

export default ApprovedBooking;
