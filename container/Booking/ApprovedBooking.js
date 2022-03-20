import React from "react";
import moment from "moment";
import { Row, Col, Card, Button } from "antd";
import ApartmentCurrency from "container/SinglePage/ApartmentCurrency/ApartmentCurrency";
import ApartmentDetails from './ApartmentDetails';
import AmountPaid from "./AmountPaid";
import Tenants from "./Tenants";

const ApprovedBooking = ({ booking }) => {
  return (
    <Card title={`Booking ID ${booking.id}`}>
      <Row gutter={16}>
        <Col md={12} sm={24} xs={24}>
          <Card title="Due Payment">
            <Row gutter={10}>
              <Col span="8">
                <strong>Pending Amount:</strong>
              </Col>
              <Col span="16">
                <h3
                  style={{
                    textAlign: "right",
                    fontAize: "20px",
                    marginBottom: "0px",
                  }}
                >
                  <ApartmentCurrency currency={booking.currency} />
                  {booking.pending_balance}
                </h3>
              </Col>
            </Row>

            <Row gutter={10}>
              <Col span="8">
                <strong>Due Date:</strong>
              </Col>
              <Col span="16">
                <h4
                  style={{
                    textAlign: "right",
                    fontAize: "18px",
                    color: "#AF1515",
                  }}
                >
                  {moment(booking.commit_deadline).format("ll")}
                </h4>
              </Col>
            </Row>
            <Button
              type="primary"
              style={{
                width: "100%",
                fontSize: "18px",
                height: "40px",
                fontWeight: "bold",
              }}
            >
              Pay Now
            </Button>
            <p
              style={{
                marginBottom: "0px",
                marginTop: "2px",
                textAlign: "center",
                fontStyle: "italic",
                fontSize: "12px",
              }}
            >
              Part of a group? You can pay a share of this amount
            </p>
          </Card>
          <br />
          <AmountPaid booking={booking} />
          <br />
          <Tenants tenants={booking.splits} currency={booking.currency} />
          <br />
          <Card title="Invite Friends"></Card>
        </Col>
        <Col md={12} sm={24} xs={24}>
          <ApartmentDetails booking={booking} />
        </Col>
      </Row>
    </Card>
  );
};

export default ApprovedBooking;
