import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Input, Alert, Checkbox, Tooltip } from "antd";
import { cloneDeep } from "lodash";
import { UserOutlined, LockOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { HiOutlineMail } from "react-icons/hi";
import { handleLoading } from "store/authSlice";
import { register } from "store/services/auth";
import PhoneInput from "components/UI/FormControl/PhoneInput";
import ReCAPTCHA from "react-google-recaptcha";

const SignUpForm = ({ booking = false, landLord = false }) => {
  const dispatcher = useDispatch();
  const { existError, loading, tempPhone, errors } = useSelector(
    (state) => state.auth
  );
  const inputWidthControl = { width: booking ? "100%" : 300 };

  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const onFinish = (values) => {
    if (!recaptchaToken) {
      alert("Please verify the reCAPTCHA before continuing.");
      return;
    }

    let registerValues = cloneDeep(values);
    registerValues.phone = tempPhone;
    registerValues.landlord_request = landLord;
    registerValues.terms_accepted = true;
    registerValues.recaptcha_token = recaptchaToken;

    dispatcher(handleLoading(true));
    dispatcher(register(registerValues));
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
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

        {booking && (
          <Form.Item
            name="parent"
            style={{ marginBottom: "10px" }}
            valuePropName="checked"
          >
            <Checkbox value={true}>Are you a parent?</Checkbox>
          </Form.Item>
        )}

        {existError && (
          <>
            {errors.map((error) => {
              return (
                <Alert
                  key={`${error[0]}-${error[1]}`}
                  message={`${error[0]} ${error[1]}`}
                  type="error"
                  showIcon
                />
              );
            })}
            <br />
          </>
        )}

        {/* Add the reCAPTCHA widget */}
        <Form.Item style={{ marginBottom: "20px" }}>
          <ReCAPTCHA
            sitekey={process.env.googleRecapthaKey}
            onChange={handleRecaptchaChange}
          />
        </Form.Item>

        {/* Terms & Conditions and Privacy Policy */}
        <Form.Item
          name="terms_privacy_agreement"
          valuePropName="checked"
          rules={[{
            required: true,
            message: "You must agree to the terms & conditions and privacy policy"
          }]}
          style={{ ...inputWidthControl, marginBottom: "10px" }}
        >
          <Checkbox>
            I agree to the{" "}
            <a href="/terms-of-services" target="_blank" rel="noopener noreferrer">
              terms & conditions
            </a>
            {" "}and the{" "}
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              privacy policy
            </a>
            {" "}as documented here.*
          </Checkbox>
        </Form.Item>

        {/* Marketing Text Messages */}
        <Form.Item
          name="marketing_messages_agreement"
          valuePropName="checked"
          style={{ ...inputWidthControl, marginBottom: "10px" }}
        >
          <Checkbox>
            I agree to receive marketing text messages{" "}
            <Tooltip
              title="Once a week regarding sales and other promotional events at the phone number provided above to Iceberg, Inc. Message & data rates may apply. Reply STOP to no longer receive messages at any time."
            >
              <InfoCircleOutlined style={{ marginLeft: 4, color: "#0088E5" }} />
            </Tooltip>
          </Checkbox>
        </Form.Item>

        {/* Customer Support Text Messages */}
        <Form.Item
          name="support_messages_agreement"
          valuePropName="checked"
          rules={[{
            required: true,
            message: "You must agree to receive customer support text messages"
          }]}
          style={{ ...inputWidthControl, marginBottom: "10px" }}
        >
          <Checkbox>
            I agree to receive customer support text messages{" "}
            <Tooltip
              title="As needed for the orders that I have placed at the phone number provided above to Iceberg, Inc. Message & data rates may apply. Reply STOP to no longer receive messages at any time."
            >
              <InfoCircleOutlined style={{ marginLeft: 4, color: "#0088E5" }} />
            </Tooltip>
          </Checkbox>
        </Form.Item>

        {/* Required field notice */}
        <Form.Item style={{ marginBottom: "10px" }}>
          <span style={{ fontSize: "12px", color: "#666" }}>
            * Field is required to submit the form
          </span>
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
            {booking ? "REGISTER TO JOIN BOOKING" : "Continue"}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignUpForm;
