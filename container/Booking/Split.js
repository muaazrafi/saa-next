import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { UserOutlined } from "@ant-design/icons";
import {
  Card,
  Row,
  Col,
  InputNumber,
  Button,
  Popconfirm,
  notification,
  Form,
  Input,
} from "antd";
import { splitIntent } from "store/services/card";
import ApartmentCurrency from "container/SinglePage/ApartmentCurrency/ApartmentCurrency";
import CardDetails from "../Payment/CardDetails";
import CardSection from "../Payment/CardSection";
import { confirmSplit } from "/store/services/booking";
import { handleLoading } from "store/bookingSlice";
import { changeMoveStep, setError } from "store/cardSlice";
import { create } from "store/services/card";

const { TextArea } = Input;

const Split = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { booking, loading } = useSelector((state) => state.booking);
  const {
    card,
    moveStep,
    loading: cardLoading,
    error,
  } = useSelector((state) => state.card);
  const [changeCard, setChangeCard] = useState(false);
  const [amount, setAmount] = useState(null);
  const elements = useElements();
  const stripe = useStripe();
  const [form] = Form.useForm();

  useEffect(() => {
    if (booking && booking.pending_balance === 0) {
      notification["success"]({
        message: "Thank You!",
        description: "Successfully completed the payment.",
      });
      router.push("/thank-you-for-booking");
    }
  }, [booking]);

  useEffect(async () => {
    if (moveStep) {
      dispatch(changeMoveStep(false));
      await makePayment();
      setChangeCard(false);
    }
  }, [moveStep]);

  useEffect(() => {
    if (!cardLoading) {
      setChangeCard(true);
    }
  }, [cardLoading]);

  const handleSubmit = async (values) => {
    if (!stripe || !elements) {
      return;
    }
    dispatch(handleLoading(true));
    const cardElement = elements.getElement(CardElement);
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: values.holder_name,
        address: {
          state: values.state,
          city: values.city,
          line1: values.street_address,
          postal_code: values.zip,
        },
      },
    });
    if (error) {
      dispatch(handleLoading(false));
      dispatch(setError(error.message));
    } else {
      dispatch(create(paymentMethod.id));
    }
  };

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
      dispatch(setError(error.message));
      dispatch(handleLoading(false));
    } else {
      dispatch(confirmSplit({ bookingID: booking.id, intent }));
      setAmount(null);
    }
  };

  const ChangeCard = () => {
    return (
      <>
        {card && !cardLoading && (
          <Row gutter={20}>
            <Col span={24} style={{ textAlign: "center" }}>
              <a
                style={{ textTransform: "uppercase", fontWeight: "bold" }}
                onClick={() => setChangeCard(!changeCard)}
              >
                {changeCard ? "Use Exisitng Credit Card" : "Change Credit Card"}
              </a>
            </Col>
          </Row>
        )}
      </>
    );
  };

  return (
    <Card title="Make Payment">
      {changeCard ? (
        <Form
          name="card"
          form={form}
          className="card-form"
          onFinish={handleSubmit}
          layout="vertical"
        >
          <CardSection error={error} />
          <br />
          <Row gutter={20}>
            <Col md={12} sm={24} xs={24}>
              <Form.Item
                label="Card Holder Name"
                name="holder_name"
                rules={[
                  { required: true, message: "Card Holder Name is required" },
                ]}
                style={{ marginBottom: "10px" }}
                hasFeedback
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  style={{ width: "100%" }}
                  placeholder="Card Holder Name"
                />
              </Form.Item>
            </Col>
            <Col md={12} sm={24} xs={24}>
              <Form.Item
                label="State/Province"
                name="state"
                rules={[{ required: true, message: "State is required" }]}
                style={{ marginBottom: "10px" }}
                hasFeedback
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  style={{ width: "100%" }}
                  placeholder="State/Province"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={20}>
            <Col md={12} sm={24} xs={24}>
              <Form.Item
                label="City"
                name="city"
                rules={[{ required: true, message: "City is required" }]}
                style={{ marginBottom: "10px" }}
                hasFeedback
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  style={{ width: "100%" }}
                  placeholder="City"
                />
              </Form.Item>
            </Col>
            <Col md={12} sm={24} xs={24}>
              <Form.Item
                label="Zip Code"
                name="zip"
                rules={[{ required: true, message: "Zip Code is required" }]}
                style={{ marginBottom: "10px" }}
                hasFeedback
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  style={{ width: "100%" }}
                  placeholder="Zip Code"
                />
              </Form.Item>
            </Col>
            <Col span={24}></Col>
          </Row>

          <Row gutter={20}>
            <Col span={24}>
              <Form.Item
                label="Street Address"
                name="street_address"
                rules={[
                  { required: true, message: "Street address is required" },
                ]}
                style={{ marginBottom: "10px" }}
                hasFeedback
              >
                <TextArea rows={2} placeholder="Street Address" />
              </Form.Item>
            </Col>
          </Row>
          <ChangeCard />
          <Row gutter={20}>
            <Col span={24}>
              <Form.Item
                label={
                  <strong>
                    Amount (Pending
                    <ApartmentCurrency currency={booking.currency} />
                    {booking.pending_balance})
                  </strong>
                }
                name="amount"
                rules={[{ required: true, message: "Amount can't be blank." }]}
                style={{ marginBottom: "10px" }}
                hasFeedback
              >
                <InputNumber
                  placeholder="Enter amount you want to contribute."
                  onChange={(value) => setAmount(value)}
                  min={0.1}
                  precision={2}
                  step={0.1}
                  max={booking.pending_balance}
                  style={{ width: "100%", margin: "2px 0px 8px 0px" }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item style={{ textAlign: "right" }}>
            <Popconfirm
              placement="top"
              title={`Are you sure to pay ${amount}`}
              onConfirm={() => form.submit()}
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
              <Button
                type="primary"
                style={{ width: "100%" }}
                loading={loading}
              >
                Pay Now (<ApartmentCurrency currency={booking.currency} />
                {amount})
              </Button>
            </Popconfirm>
          </Form.Item>
        </Form>
      ) : (
        <>
          <CardDetails />
          <ChangeCard />
          <Row style={{ marginTop: "8px" }}>
            <Col span={24}>
              <strong>
                Amount (Pending{" "}
                <ApartmentCurrency currency={booking.currency} />
                {booking.pending_balance})
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
                <Button
                  type="primary"
                  style={{ width: "100%" }}
                  loading={loading}
                >
                  Pay Now (<ApartmentCurrency currency={booking.currency} />
                  {amount})
                </Button>
              </Popconfirm>
            </Col>
          </Row>
        </>
      )}
    </Card>
  );
};

export default Split;
