import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input } from "antd";
import { useRouter } from "next/router";
import { notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Stepper from "components/UI/Stepper/Stepper";
import VerifyAuth from "container/Auth/VerifyAuth";
import { fetchApartment } from "store/services/apartment";
import { FormHeader, Title, FormContent, FormAction } from "./Steps.style";

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
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="first_name"
          rules={[{ required: true, message: "First Name is required" }]}
          style={{ marginBottom: "10px" }}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            style={{ width: 256 }}
            placeholder="First Name"
          />
        </Form.Item>

        <Form.Item
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

        <Form.Item
          name="phone"
          style={{ marginBottom: "10px" }}
          rules={[{ validator: validatePhone }]}
        >
          <IntlTelInput
            containerClassName="intl-tel-input"
            inputClassName="ant-input"
            onPhoneNumberChange={handlePhoneChange}
            format={true}
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            { type: "email", message: "The input is not valid E-mail!" },
            { required: true, message: "Please input your E-mail!" },
          ]}
          style={{ marginBottom: "10px" }}
        >
          <Input
            prefix={<HiOutlineMail className="site-form-item-icon" />}
            placeholder="Email"
            style={{ width: 256 }}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
            { min: 8, message: "Password must be minimum 8 characters." },
          ]}
          style={{ marginBottom: "20px" }}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            style={{ width: 256 }}
          />
        </Form.Item>

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
