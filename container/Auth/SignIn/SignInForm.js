import React from "react";
import { Form, Button, Input, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { switchforgot } from "store/authSlice";
import { authenticate } from "store/services/auth";

const SignInForm = ({ booking = false }) => {
  const dispatcher = useDispatch();
  const { existError } = useSelector((state) => state.auth);
  const inputWidthControl = { width: booking ? "100%" : 256 };

  const onFinish = (values) => {
    dispatcher(authenticate(values));
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          { type: "email", message: "The input is not valid E-mail!" },
          { required: true, message: "Please input your E-mail!" },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
          style={inputWidthControl}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          style={inputWidthControl}
        />
      </Form.Item>
      {existError && (
        <Alert
          message="Invalid Email/Password."
          type="error"
          style={{ width: 256, marginBottom: "20px" }}
          showIcon
        />
      )}
      <Form.Item>
        <Button type="primary" htmlType="submit" style={inputWidthControl}>
          { booking ? 'LOGIN TO JOIN BOOKING' : 'Log in' } 
        </Button>
      </Form.Item>
      {!booking && (
        <Form.Item>
          <Button
            type="default"
            style={inputWidthControl}
            block
            onClick={() => dispatcher(switchforgot("forgot"))}
          >
            Forgot password
          </Button>
        </Form.Item>
      )}
    </Form>
  );
};

export default SignInForm;
