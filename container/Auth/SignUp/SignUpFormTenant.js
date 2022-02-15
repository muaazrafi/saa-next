import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Input } from "antd";
import IntlTelInput from "react-intl-tel-input";
import { isValidPhoneNumber } from 'libphonenumber-js';
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { HiOutlineMail } from "react-icons/hi";
import { register } from "store/services/auth";

const SignUpForm = () => {
  const dispatcher = useDispatch();
  const { existError } = useSelector((state) => state.auth);
  const [phoneNo, setPhoneNo] = useState(null);
  const [phoneNoCountry, setPhoneNoCountry] = useState(null);

  const onFinish = (values) => {
    dispatcher(register(values));
  };

  const handlePhoneChange = (status, phoneNumber, country) => {
    setPhoneNo(phoneNumber);
    setPhoneNoCountry(country);
  };

  const validatePhone = (rule, value, callback) => {

    if (!phoneNoCountry && !phoneNo) {
      callback("Please input phone no.");
      return false;
    }
    
    const formatPhoneNumber = `+${phoneNoCountry.dialCode}${phoneNo}` 

    if( isValidPhoneNumber(formatPhoneNumber, phoneNoCountry.iso2) ) {
      callback();
    } else {
      callback("Please enter valid phone no.");
    }
    return false;
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
          rules={[
            { validator: validatePhone }
          ]}          
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
          >
            Continue
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignUpForm;
