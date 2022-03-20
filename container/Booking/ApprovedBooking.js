import React from "react";
import moment from "moment";
import { Row, Col, Card, Button } from "antd";
import { Progress, Tooltip } from "antd";
import ApartmentCurrency from "container/SinglePage/ApartmentCurrency/ApartmentCurrency";

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
            <p style={{ marginBottom: '0px', 'marginTop': '2px', 'textAlign': 'center', 'fontStyle': 'italic', 'fontSize': '12px' }}>Part of a group? You can pay a share of this amount</p>
          </Card>
          <br />
          <Card title="Amount Paid">
            <div style={{ textAlign: "center" }}>
              <Tooltip title={`Paid Amount / First Month Payment`}>
                <Progress
                  type="circle"
                  percent={100}
                  success={{
                    percent: Math.ceil(
                      (booking.paid_balance / booking.first_month_payment) * 100
                    ),
                  }}
                  status="active"
                  format={() => {
                    return (
                      <span style={{ fontSize: '20px' }} >
                        <ApartmentCurrency currency={booking.currency} />{booking.paid_balance} /<br /><ApartmentCurrency currency={booking.currency} />{booking.first_month_payment}
                      </span>
                    );
                  }}
                />
              </Tooltip>
            </div>
          </Card>
          <br />
          <Card title="Tenants"></Card>
          <br />
          <Card title="Invite Friends"></Card>
        </Col>
        <Col md={12} sm={24} xs={24}>
          <Card
            title={booking.apartment_name}
            hoverable
            cover={
              <img
                alt="apartment picture"
                src={booking.first_image}
                style={{ height: "200px", objectFit: "cover" }}
              />
            }
          >
            <Row gutter={10} className="mb-imp-5">
              <Col span="4">
                <strong>Address:</strong>
              </Col>
              <Col span="20">{booking.apartment_address}</Col>
            </Row>

            <Row gutter={10} className="mb-imp-5">
              <Col span="6">
                <strong>Arrival:</strong>
              </Col>
              <Col span="6">{booking.check_in}</Col>
              <Col span="6">
                <strong>Departure:</strong>
              </Col>
              <Col span="6">{booking.check_out}</Col>
            </Row>

            <Row gutter={10}>
              <Col span="4">
                <strong>Bedrooms:</strong>
              </Col>
              <Col span="4" className="text-right">
                {booking.number_of_bedrooms}
              </Col>
              <Col span="4">
                <strong>Bathrooms:</strong>
              </Col>
              <Col span="4" className="text-right">
                {booking.number_of_bathrooms}
              </Col>
              <Col span="4">
                <strong>Guests:</strong>
              </Col>
              <Col span="4" className="text-right">
                {booking.number_of_room_mates}
              </Col>
            </Row>

            <Row gutter={10}></Row>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

export default ApprovedBooking;
