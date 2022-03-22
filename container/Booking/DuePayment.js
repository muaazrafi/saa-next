import React from "react";
import moment from "moment";
import Link from "next/link";
import { Card, Row, Col, Button } from "antd";
import ApartmentCurrency from "container/SinglePage/ApartmentCurrency/ApartmentCurrency";

const DuePayment = ({booking}) => {
  return (
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
      <Link href={`/splits/${booking.id}`}>
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
  );
};

export default DuePayment;
