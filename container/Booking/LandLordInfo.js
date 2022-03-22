import React from "react";
import { Card, Row, Col } from "antd";

const LandLordInfo = ({ landlord }) => {
  return (
    <Card title='Landlord Information'>
      <Row gutter={10}>
        <Col span="8">
          <strong>Name:</strong>
        </Col>
        <Col span="16">
          <h4 className="text-right">
            {`${landlord.first_name} ${landlord.last_name}`} 
          </h4>
        </Col>
      </Row>
      <Row gutter={10}>
        <Col span="8">
          <strong>Email:</strong>
        </Col>
        <Col span="16">
          <h4 className="text-right">
            {landlord.email}
          </h4>
        </Col>
      </Row>
      <Row gutter={10}>
        <Col span="8">
          <strong>Contact #:</strong>
        </Col>
        <Col span="16">
          <h4 className="text-right">
            {landlord.phone}
          </h4>
        </Col>
      </Row>
    </Card>
  );
};

export default LandLordInfo;
