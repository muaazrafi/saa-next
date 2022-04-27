import React from "react";
import { useRouter } from 'next/router';
import { LockOutlined } from "@ant-design/icons";
import { Form, Row, Col, Typography, Button, Input, Alert } from "antd";
import Wrapper, { FormWrapper } from "./Auth.style";
import { useSelector, useDispatch } from "react-redux";
import { handleLoading } from "store/authSlice";
import { resetPassword } from "/store/services/auth";

const { Title } = Typography;

const  ResetPassword = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { forgetErrors, loading } = useSelector((state) => state.auth);
  
  const onFinish = (data) => {
    dispatch(handleLoading(true));
    dispatch(resetPassword({...data, reset_password_token: router.query.reset_password_token}));
  };

  return (
    <Wrapper>
      <Row gutter={[8, 8]} type="flex">
        <Col span={24}>
          <FormWrapper style={{ width: "350px", margin: "0 auto" }}>
            <Title level={5}>Reset Your Password</Title>
            <>
              <Form
                name="normal_login"
                className="login-form"
                layout="vertical"
                onFinish={onFinish}
              >
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                    {
                      min: 8,
                      message: "Password must be minimum 8 characters.",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                  />
                </Form.Item>

                <Form.Item
                  name="password_confirmation"
                  label="Confirm Password"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                  />
                </Form.Item>
                {forgetErrors.length > 0 && (
                  <Alert
                    message={forgetErrors[0]}
                    type="error"
                    style={{ width: 256, marginBottom: "20px", textTransform: 'capitalize' }}
                    showIcon
                  />
                )}
                <Form.Item>
                  <Button
                    type="primary"
                    size="middle"
                    style={{ width: "100%" }}
                    htmlType="submit"
                    block
                    loading={loading}
                  >
                    Reset password
                  </Button>
                </Form.Item>
              </Form>
            </>
          </FormWrapper>
        </Col>
      </Row>
    </Wrapper>
  );
}

export default ResetPassword;