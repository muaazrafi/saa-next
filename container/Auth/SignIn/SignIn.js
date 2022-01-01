import React from 'react';
import Link from 'next/link';
import { Divider,Row,Col,Image,Typography,Button } from 'antd';
import Logo from 'components/UI/Logo/Logo';
import { REGISTRATION_PAGE } from 'settings/constant';
import SignInForm from './SignInForm';
import SocialLogin from '../SocialLogin';
import Wrapper, {
  TitleInfo,
  Text,
  FormWrapper,
  BannerWrapper,
} from '../Auth.style';
import { useDispatch, useSelector } from 'react-redux';
import { switchin, switchup } from 'store/authSlice'  
const { Title } = Typography;
const SignIn = () => {
  const dispatcher = useDispatch();
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
          <Title level={5}>Log in </Title>
          <SignInForm/>
          <Title level={5}>Do you not have account already?</Title>
          <Button type="default" style={{ width: 256 }} block onClick={() => dispatcher(switchup("up"))}>
            Sign Up
          </Button>
        </FormWrapper>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default SignIn;
