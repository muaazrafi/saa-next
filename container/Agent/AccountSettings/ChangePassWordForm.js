import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Button, Row, Col } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { handleLoading } from "store/authSlice";
import { updateMe } from "store/services/auth";

export default function ChangePassWord() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const onFinish = (values) => {
    dispatch(handleLoading(true));
    dispatch(updateMe(values));
  };

  return (
    <>
      <h2>Change Password</h2>
      <Form
        name="password"
        className="password-form"
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            { min: 8, message: "Password must be minimum 8 characters." },
          ]}
          style={{ marginBottom: "20px" }}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item
          name="password_confirmation"
          label="Password Confirmation"
          rules={[
            {
              required: true,
              message: "Please input confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "Password that you entered do not match!"
                );
              },
            }),
          ]}
          style={{ marginBottom: "20px" }}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password Confirmation"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            size="middle"
            htmlType="submit"
            block
            loading={loading}
          >
            Update Password
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
