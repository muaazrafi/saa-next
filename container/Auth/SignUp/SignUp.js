import { React, useState } from "react";
import { Row, Col, Radio, Typography, Button } from "antd";
import SignUpForm from "./SignUpForm";
import Wrapper, { FormWrapper } from "../Auth.style";
const { Title } = Typography;
import { useDispatch, useSelector } from "react-redux";
import { switchin } from "store/authSlice";

const SignUp = () => {
  const dispatcher = useDispatch();
  const [isFormChange, setIsFormChange] = useState(false);

  const handleformChange = (value) => {
    setIsFormChange(value);
  };

  return (
    <Wrapper>
      <Row gutter={[8, 8]} type="flex">
        <Col span={24}>
          <FormWrapper>
            {isFormChange ? (
              <Title level={5}>Create Tenant Account</Title>
            ) : (
              <Title level={5}>Create Landlord Account</Title>
            )}
            <Radio.Group
              style={{ marginBottom: 15 }}
              size="large"
              defaultValue="Tenant"
              buttonStyle="solid"
            >
              <Radio.Button
                value="Tenant"
                onChange={() => handleformChange(false)}
              >
                Tenant
              </Radio.Button>
              <Radio.Button
                value="Landlord"
                onChange={() => handleformChange(true)}
              >
                Landlord
              </Radio.Button>
            </Radio.Group>
            <SignUpForm landLord={isFormChange} />
            <Title level={5}>Do you have account already?</Title>
            <Button
              type="default"
              style={{ width: 256 }}
              block
              onClick={() => dispatcher(switchin("in"))}
            >
              Log in
            </Button>
          </FormWrapper>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default SignUp;
