import React from 'react';
import Link from 'next/link';
import { Divider,Row,Col,Image,Typography } from 'antd';
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

const { Title } = Typography;
const SignIn = () => {
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
        </FormWrapper>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default SignIn;
