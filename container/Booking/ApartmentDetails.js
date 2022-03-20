import React from "react";
import { Row, Col, Card } from "antd";

const ApartmentDetails = ({ booking }) => {
  return (
    <Card
      cover={
        <img
          alt="apartment picture"
          src={booking.first_image}
          style={{ height: "300px", objectFit: "cover" }}
        />
      }
    >
      <Row gutter={10} className="mb-imp-5">
        <Col span="4">
          <strong>Name:</strong>
        </Col>
        <Col span="20">{booking.apartment_name}</Col>
      </Row>

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
        <Col span="6" className="text-right">
          {booking.check_in}
        </Col>
        <Col span="6">
          <strong>Departure:</strong>
        </Col>
        <Col span="6" className="text-right">
          {booking.check_out}
        </Col>
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
    </Card>
  );
};

export default ApartmentDetails;
