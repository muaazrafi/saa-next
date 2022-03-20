import React from "react";
import { Card, Row, Col } from "antd";
import ApartmentCurrency from "container/SinglePage/ApartmentCurrency/ApartmentCurrency";

const Tenants = ({ tenants, currency }) => {
  return (
    <Card title="Tenants">
      <Row gutter={10} className="mb-imp-5">
        <Col span="12">
          <h4>Name</h4>
        </Col>
        <Col span="12" className="text-right">
          <h4>
            <ApartmentCurrency currency={currency} />
            Amount Paid
          </h4>
        </Col>
      </Row>
      {tenants.map((tenant) => {
        return (
          <Row gutter={10} className="mb-imp-5" style={{ borderBottom: '1px solid #fafafa' }}>
            <Col span="12">{tenant.name}</Col>
            <Col span="12" className="text-right">
              <strong>
                <ApartmentCurrency currency={currency} />
                {tenant.amount}
              </strong>
            </Col>
          </Row>
        );
      })}
    </Card>
  );
};

export default Tenants;
