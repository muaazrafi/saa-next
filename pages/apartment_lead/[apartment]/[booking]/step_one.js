import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Row, Col } from "antd";
import { useRouter } from "next/router";
import { notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Stepper from "components/UI/Stepper/Stepper";
import VerifyAuth from "container/Auth/VerifyAuth";
import { fetchApartment } from "store/services/apartment";
import { FormHeader, Title, FormContent, FormAction } from "./Steps.style";
import PhoneInput from 'components/UI/FormControl/PhoneInput';

export default function StepOne(props) {
  const dispatcher = useDispatch();
  const { apartment, loading } = useSelector((state) => state.apartment);

  const onFinish = (values) => {
    debugger
  };

  return (
    <FormContent>
      <Stepper step={0} />
      <VerifyAuth />
      <Form
        name="normal_login"
        className="login-form"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="First Name"
          name="first_name"
          rules={[{ required: true, message: "First Name is required" }]}
          style={{ marginBottom: "10px" }}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            style={{ width: '100%' }}
            placeholder="First Name"
          />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="last_name"
          rules={[{ required: true, message: "Last Name is required" }]}
          style={{ marginBottom: "10px" }}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            style={{ width: 256 }}
            placeholder="Last Name"
          />
        </Form.Item>

        <PhoneInput label="Phone" />

        <Form.Item>
          <Button
            type="primary"
            size="middle"
            style={{ width: 256 }}
            htmlType="submit"
            block
            loading={loading}
          >
            Continue
          </Button>
        </Form.Item>
      </Form>
    </FormContent>
  );
}
