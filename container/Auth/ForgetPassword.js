import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { Form, Row, Col, Typography, Button, Input, Alert } from "antd";
import Wrapper, { FormWrapper } from "./Auth.style";
import { useSelector, useDispatch } from "react-redux";
import { switchin, switchup, handleLoading } from "store/authSlice";
import { forgetPassword } from "/store/services/auth";

const { Title } = Typography;

export default function ForgetPassWord() {
  const dispatch = useDispatch();
  const { forgetErrors, loading } = useSelector((state) => state.auth);

  const onFinish = (data) => {
    dispatch(handleLoading(true));
    dispatch(forgetPassword(data));
  };

  return (
    <Wrapper>
      <Row gutter={[8, 8]} type="flex">
        <Col span={24}>
          <FormWrapper>
            <Title level={5}>Enter email to recover account</Title>
            <>
              <Form
                name="normal_login"
                className="login-form"
                onFinish={onFinish}
              >
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    { required: true, message: "Please input your E-mail!" },
                  ]}
                  style={{ marginBottom: "10px" }}
                >
                  <Input
                    prefix={<HiOutlineMail className="site-form-item-icon" />}
                    placeholder="Email"
                    style={{ width: "100%" }}
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
                    Forgot password
                  </Button>
                </Form.Item>
              </Form>
              <Button
                type="default"
                style={{ width: 256, marginBottom: "10px" }}
                block
                onClick={() => dispatcher(switchup("up"))}
              >
                Sign up
              </Button>
              <Button
                type="default"
                style={{ width: 256 }}
                block
                onClick={() => dispatcher(switchin("in"))}
              >
                Log in
              </Button>
            </>
          </FormWrapper>
        </Col>
      </Row>
    </Wrapper>
  );
}
