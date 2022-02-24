import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Row, Col, Radio, DatePicker, Select } from "antd";
import { useRouter } from "next/router";
import { notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Stepper from "components/UI/Stepper/Stepper";
import VerifyAuth from "container/Auth/VerifyAuth";
import { fetchApartment } from "store/services/apartment";
import { FormContent } from "./Steps.style";
import PhoneInput from "components/UI/FormControl/PhoneInput";

const { TextArea } = Input;
const { Option } = Select;

export default function StepOne(props) {
  const dispatcher = useDispatch();
  const { apartment, loading } = useSelector((state) => state.apartment);

  const onFinish = (values) => {
    debugger;
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
        <Row gutter={20}>
          <Col>
            <Form.Item
              label="First Name"
              name="first_name"
              rules={[{ required: true, message: "First Name is required" }]}
              style={{ marginBottom: "10px" }}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                style={{ width: "100%" }}
                placeholder="First Name"
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label="Last Name"
              name="last_name"
              rules={[{ required: true, message: "Last Name is required" }]}
              style={{ marginBottom: "10px" }}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                style={{ width: "100%" }}
                placeholder="Last Name"
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[{ required: true, message: "Gender is required" }]}
              style={{ marginBottom: "10px" }}
            >
              <Radio.Group optionType="button" buttonStyle="solid">
                <Radio.Button value="male">Male</Radio.Button>
                <Radio.Button value="female">Female</Radio.Button>
                <Radio.Button value="other">Other</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label="Birthday"
              name="dob"
              rules={[{ required: true, message: "Birthday is required" }]}
              style={{ marginBottom: "10px" }}
            >
              <DatePicker />
            </Form.Item>
          </Col>
          <Col>
            <PhoneInput label="Phone" />
          </Col>

          <Col>
            <Form.Item
              label="Purpose Of Trip"
              name="purpose_of_trip_choice"
              rules={[{ required: true, message: "Purpose is required" }]}
              style={{ marginBottom: "10px" }}
            >
              <Select placeholder="Select Purpose">
                <Option value="Teaching">Teaching</Option>
                <Option value="Interning">Interning</Option>
                <Option value="Studying at a University">
                  Studying at a University
                </Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              label="Country"
              name="country"
              rules={[{ required: true, message: "Purpose is required" }]}
              style={{ marginBottom: "10px" }}
            >
              <Select placeholder="Select Country">
                <Option value="Teaching">Teaching</Option>
                <Option value="Interning">Interning</Option>
                <Option value="Studying at a University">
                  Studying at a University
                </Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              label="School"
              name="school"
              rules={[{ required: true, message: "School is required" }]}
              style={{ marginBottom: "10px" }}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                style={{ width: "100%" }}
                placeholder="Enter School"
              />
            </Form.Item>
          </Col>

        </Row>

        <Row gutter={20}>
          <Col span={24}>
            <Form.Item
              label="About you"
              name="about_user"
              style={{ marginBottom: "10px" }}
            >
              <TextArea
                rows={4}
                placeholder="Please give the landlord more information about your visit."
                maxLength={6}
              />
            </Form.Item>
          </Col>
        </Row>

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
