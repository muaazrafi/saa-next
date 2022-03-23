import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Form, Button, Input, Row, Col } from "antd";
import CardSection from "./CardSection";
import { create } from 'store/services/card';
import { handleLoading, setError, error } from "/store/cardSlice";
const { TextArea } = Input;

const Card = (props) => {
  const elements = useElements();
  const stripe = useStripe();
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.card);
  const [cardError, setCardError] = useState(null);

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
      dispatch(setError(error.message));
    } else {
      dispatch(create(paymentMethod.id));
    }
  };

  return (
    <Form name="card" className="card-form" onFinish={handleSubmit} layout="vertical" >
      <CardSection error={error} />
      <br />
      <Row gutter={20}>
        <Col md={6} sm={24} xs={24}>
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
        <Col md={6} sm={24} xs={24}>
          <Form.Item
            label="State/Province"
            name="state"
            rules={[
              { required: true, message: "State is required" },
            ]}
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
        <Col md={6} sm={24} xs={24}>
          <Form.Item
            label="City"
            name="city"
            rules={[
              { required: true, message: "City is required" },
            ]}
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
        <Col md={6} sm={24} xs={24}>
          <Form.Item
            label="Zip Code"
            name="zip"
            rules={[
              { required: true, message: "Zip Code is required" },
            ]}
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
        <Col span={24}>
            
        </Col>
      </Row>

      <Row gutter={20}>
        <Col span={24}>
          <Form.Item
            label="Street Address"
            name="street_address"
            rules={[{ required: true, message: "Street address is required" }]}
            style={{ marginBottom: "10px" }}
            hasFeedback
          >
            <TextArea
              rows={2}
              placeholder="Street Address"
            />
          </Form.Item>
        </Col>
      </Row>
            
      <Form.Item style={{ textAlign: 'right' }} >
        <Button
          type="primary"
          size="large"
          style={{ width: 256 }}
          htmlType="submit"
          block
          loading={loading}
        >
          Continue
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Card;