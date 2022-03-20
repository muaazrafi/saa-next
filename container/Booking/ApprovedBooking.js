import React from "react";
import moment from "moment";
import Link from "next/link";
import { Row, Col, Card, Button } from "antd";
import ApartmentCurrency from "container/SinglePage/ApartmentCurrency/ApartmentCurrency";
import ApartmentDetails from "./ApartmentDetails";
import AmountPaid from "./AmountPaid";
import InviteFriends from "./InviteFriends";
import Tenants from "./Tenants";
import ShareLink from "./ShareLink";

const ApprovedBooking = ({ booking }) => {
  return (
    <Row gutter={16}>
      <Col md={12} sm={24} xs={24}>
        <Card title={`Due Payment (Booking ID ${booking.id})`}>
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
          <Link href="/splits">
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
          </Link>
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
