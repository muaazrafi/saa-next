import { useDispatch, useSelector } from "react-redux";
import { cloneDeep } from 'lodash';
import { Form, Input, Button, Row, Col, Radio, Select } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { handleLoading } from "store/authSlice";
import { updateMe } from "store/services/auth";
import PhoneInput from "components/UI/FormControl/PhoneInput";


const { TextArea } = Input;
const { Option } = Select;

export default function UpdateInfo({ user }) {
  const { loading, tempPhone } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    let updateValues = cloneDeep(values);
    updateValues.phone = tempPhone;
    dispatch(handleLoading(true));
    dispatch(updateMe(updateValues));
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      layout="vertical"
      initialValues={user}
      onFinish={onFinish}
    >
      <Row gutter={20}>
        <Col lg={6} md={6} sm={24} xs={24} >
          <Form.Item
            label="First Name"
            name="first_name"
            rules={[{ required: true, message: "First Name is required" }]}
            style={{ marginBottom: "10px" }}
            hasFeedback
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              style={{ width: "100%" }}
              placeholder="First Name"
            />
          </Form.Item>
        </Col>
        <Col lg={6} md={6} sm={24} xs={24} >
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
        <Col lg={6} md={6} sm={24} xs={24} >
          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: "Gender is required" }]}
            style={{ marginBottom: "10px" }}
            lg={6} md={6} sm={24} xs={24}
          >
            <Radio.Group optionType="button" buttonStyle="solid">
              <Radio.Button value="male">Male</Radio.Button>
              <Radio.Button value="female">Female</Radio.Button>
              <Radio.Button value="other">Other</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col lg={6} md={6} sm={24} xs={24} >
          <PhoneInput label="Phone" />
        </Col>

        <Col lg={6} md={6} sm={24} xs={24}  >
          <Form.Item
            label="School"
            name="school_name"
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

        <Col lg={6} md={6} sm={24} xs={24} >
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

        <Col lg={6} md={6} sm={24} xs={24} >
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

        <Col lg={6} md={6} sm={24} xs={24} >
          <Form.Item
            label="How heard about us ?"
            name="how_heard"
            rules={[{ required: true, message: "Purpose is required" }]}
            style={{ marginBottom: "10px" }}
          >
            <Select placeholder="How did you hear about us?">
              <Option value="Web search">Web search</Option>
              <Option value="Facebook">Facebook</Option>
              <Option value="Instagram">Instagram</Option>
              <Option value="Brand ambassador">Brand ambassador</Option>
              <Option value="University">University</Option>
              <Option value="News">News</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
        </Col>

      </Row>

      <Row gutter={20}>
        <Col span={24}>
          <Form.Item
            label="About you"
            name="about_user"
            rules={[{ required: true, message: "About info is required" }]}
            style={{ marginBottom: "10px" }}
          >
            <TextArea
              rows={4}
              placeholder="Tell us more about where you are working or studying (Be sure to give some detail for the landlord)."
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
  );
}
