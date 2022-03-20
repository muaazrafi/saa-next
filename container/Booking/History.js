import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Row, Col, Card } from "antd";
import ApartmentCurrency from "container/SinglePage/ApartmentCurrency/ApartmentCurrency";

const { Meta } = Card;

const History = (props) => {
  const { bookings, loading } = useSelector((state) => state.booking);

  console.log("Booking History Issue:", bookings)

  return (
    <Row gutter={18} className="cardholder" >
      {bookings.map((booking) => {
        return (
          <Col md={8} sm={24} xs={24} >
            <Card
              hoverable
              cover={
                <img
                  alt="apartment picture"
                  src={booking.first_image}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              }
            >

              <Row gutter={10}>
                <Col>
                  <strong>Booking ID:</strong>
                </Col>
                <Col>{booking.id}</Col>
              </Row>

              <Row gutter={10}>
                <Col>
                  <strong>Name:</strong>
                </Col>
                <Col>{booking.apartment_name}</Col>
              </Row>

              <Row gutter={10}>
                <Col>
                  <strong>Check In:</strong>
                </Col>
                <Col>{booking.check_in}</Col>
              </Row>

              <Row gutter={10}>
                <Col>
                  <strong>Check Out:</strong>
                </Col>
                <Col>{booking.check_out}</Col>
              </Row>

              <Row gutter={10}>
                <Col>
                  <strong>Status:</strong>
                </Col>
                <Col>{booking.status}</Col>
              </Row>

              <Row gutter={10}>
                <Col>
                  <strong>Paid to date:</strong>
                </Col>
                <Col>{booking.paid_to_date_display}</Col>
              </Row>
              {booking.booked_date && (
                <Row gutter={10}>
                  <Col>
                    <strong>Confirmed Date:</strong>
                  </Col>
                  <Col>{moment(booking.booked_date).format("ll")}</Col>
                </Row>
              )}             
              {booking.reject_reason && (
                <Row gutter={10}>
                  <Col>
                    <strong>Rejection Reason:</strong>
                  </Col>
                  <Col>{booking.reject_reason}</Col>
                </Row>
              )}
            </Card>
            <br />
          </Col>
        );
      })}
    </Row>
  );
};

export default History;
