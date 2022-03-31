import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Input } from "antd";
import { cloneDeep } from "lodash";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { HiOutlineMail } from "react-icons/hi";
import { handleLoading } from "store/authSlice";
import { register } from "store/services/auth";
import PhoneInput from "components/UI/FormControl/PhoneInput";

const SignUpForm = ({ booking = false }) => {
  const dispatcher = useDispatch();
  const { existError, loading, tempPhone } = useSelector((state) => state.auth);
  const inputWidthControl = { width: booking ? "100%" : 256 };

  const onFinish = (values) => {
    let registerValues = cloneDeep(values);
    registerValues.phone = tempPhone;
    dispatcher(handleLoading(true));
    dispatcher(register(registerValues));
  };

  return (
    <>
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
            style={inputWidthControl}
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
            style={inputWidthControl}
            placeholder="Last Name"
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
            style={inputWidthControl}
          />
        </Form.Item>

        <PhoneInput />

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
            style={inputWidthControl}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            size="middle"
            style={inputWidthControl}
            htmlType="submit"
            block
            loading={loading}
          >
            { booking ? 'REGISTER TO JOIN BOOKING' : 'Continue' }  
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignUpForm;
