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

        {/* SMS Consent: Opt-in terms */}
        <Form.Item
          valuePropName="checked"
          rules={[{ validator: (_, v) => v ? Promise.resolve() : Promise.reject("Required") }]}
          style={{ ...inputWidthControl, marginBottom: "10px" }}
        >
          <Checkbox>
            I've read and accept the SMS opt-in terms{" "}
            <Tooltip
              title={
                <ul style={{ margin: 0, paddingLeft: 16 }}>
                  <li>Messaging frequency may vary.</li>
                  <li>Message & data rates may apply.</li>
                  <li>Text STOP to opt out anytime.</li>
                  <li>Text HELP or visit studyabroadapartments.com for support.</li>
                  <li>
                    See our{" "}
                    <a href="/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a>{" "}
                    &{" "}
                    <a href="/terms-of-services" target="_blank" rel="noopener">Terms of Service</a>.
                  </li>
                </ul>
              }
            >
              <InfoCircleOutlined style={{ marginLeft: 4 }} />
            </Tooltip>
          </Checkbox>
        </Form.Item>
        {/* Terms of Service and Privacy Policy line */}
        <Form.Item style={{ marginBottom: "10px" }}>
          <span style={{ fontSize: "12px" }}>
            By continuing, you agree to our{" "}
            <a href="/terms-of-service" target="_blank" rel="noopener noreferrer">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>. We clearly states we do not share or sell SMS opt-in, or phone numbers for the purpose of SMS as mentioned in the  <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>.
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
