import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col, InputNumber, Button } from "antd";
import ApartmentCurrency from "container/SinglePage/ApartmentCurrency/ApartmentCurrency";
import CardDetails from "../Payment/CardDetails";

const Split = (props) => {
  const { booking, loading } = useSelector(state => state.booking);
  const [amount, setAmount] = useState(0);

  return (
    <Card title="Make Payment">
      <CardDetails />
      <Row style={{ marginTop: '8px' }} >
        <Col span={24}>
          <strong>Amount (Pending <ApartmentCurrency currency={booking.currency} />{booking.pending_balance}) </strong>
          <InputNumber
            placeholder="Enter amount you want to contribute."
            onChange={(value) => setAmount(value)}
            min={.1}
            precision={2}
            step={0.1}
            max={booking.pending_balance}
            style={{ width: '100%', margin: '2px 0px 8px 0px' }}
          />
          <Button type="primary" style={{ width: '100%' }} >
            Pay Now (<ApartmentCurrency currency={booking.currency} />{amount})
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default Split;
