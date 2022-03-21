import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStripe } from "@stripe/react-stripe-js";
import { Card, Row, Col, InputNumber, Button, Popconfirm, notification } from "antd";
import { splitIntent } from "store/services/card";
import ApartmentCurrency from "container/SinglePage/ApartmentCurrency/ApartmentCurrency";
import CardDetails from "../Payment/CardDetails";
import { confirmSplit } from "/store/services/booking";
import { handleLoading } from 'store/bookingSlice';

const Split = (props) => {
  const dispatch = useDispatch();
  const { booking, loading } = useSelector((state) => state.booking);
  const [amount, setAmount] = useState(null);
  const stripe = useStripe();

  const makePayment = async () => {
    if (!stripe) {
      return;
    }
    dispatch(handleLoading(true));
    const intent = await splitIntent(booking.id, amount);
    const { paymentIntent, error } = await stripe.confirmCardPayment(
      intent.client_secret
    );
    if (error) {
      notification["error"]({
        message: "Payment Proccesing Error!",
        description: `Please rectify payment details was not able to process payment. ${error}`,
      });
    } else {
      dispatch(confirmSplit({ bookingID: booking.id, intent }));
      setAmount(null);
    }
  };

  return (
    <Card title="Make Payment">
      <CardDetails />
      <Row style={{ marginTop: "8px" }}>
        <Col span={24}>
          <strong>
            Amount (Pending <ApartmentCurrency currency={booking.currency} />
            {booking.pending_balance}){" "}
          </strong>
          <InputNumber
            placeholder="Enter amount you want to contribute."
            onChange={(value) => setAmount(value)}
            min={0.1}
            precision={2}
            step={0.1}
            max={booking.pending_balance}
            style={{ width: "100%", margin: "2px 0px 8px 0px" }}
          />
          <Popconfirm
            placement="top"
            title={`Are you sure to pay ${amount}`}
            onConfirm={makePayment}
            okText="Yes"
            cancelText="No"
            okButtonProps={{
              size: "large",
              loading: loading,
            }}
            cancelButtonProps={{
              size: "large",
              loading: loading,
            }}
          >
            <Button type="primary" style={{ width: "100%" }} loading={loading}>
              Pay Now (<ApartmentCurrency currency={booking.currency} />
              {amount})
            </Button>
          </Popconfirm>
        </Col>
      </Row>
    </Card>
  );
};

export default Split;
