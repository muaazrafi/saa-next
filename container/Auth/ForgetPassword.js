import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { MdEmail } from 'react-icons/md';
import { Form,Divider,Row,Col,Typography,Button,Input,Image } from 'antd';
import Logo from 'components/UI/Logo/Logo';
import FormControl from 'components/UI/FormControl/FormControl';
import Wrapper, {
  TitleInfo,
  FormWrapper,
  BannerWrapper,
} from './Auth.style';
const { Title } = Typography;

import { useDispatch } from 'react-redux';
import { switchin, switchup } from 'store/authSlice' 

export default function ForgetPassWord() {
  const dispatcher = useDispatch();
  const { control, errors, handleSubmit } = useForm({
    mode: 'onChange',
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <Row gutter={[8, 8]} type='flex'>
        <Col span={12}>
          <BannerWrapper>
            <Image
              src="/images/login_signup.png"
              width={398}
            />
         </BannerWrapper>
        </Col>
        <Col span={12}>
        <FormWrapper>
        <Title level={5}>Welcome Back</Title>
        <Title level={5}>Enter your email to recover your account</Title>
        <>
        <Form name="normal_login" className="login-form" initialValues={{remember: true,}} >
          <Form.Item
                name="First Name"
                noStyle
                rules={[{ required: true, message: 'Email is required' }]}
          >
            <Input style={{ width: 256 , marginBottom: 10  }} placeholder="Email" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" size='middle' style={{ width: 256 }} htmlType="submit" block  >
            Forgot password
          </Button>
          <Button type="default" style={{ width: 256 }} block onClick={() => dispatcher(switchup("up"))}>
            Sign up
          </Button>
          <Button type="default" style={{ width: 256 }} block onClick={() => dispatcher(switchin("in"))}>
            Log in
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
