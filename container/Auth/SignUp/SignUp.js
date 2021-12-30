import {React,useState,useEffect} from 'react';
import Link from 'next/link';
import { Divider,Row,Col,Image,Radio,Typography,Button } from 'antd';
import Logo from 'components/UI/Logo/Logo';
import { LOGIN_PAGE } from 'settings/constant';
import SignUpFormTenant from './SignUpFormTenant';
import SignUpFormLandlord from './SignUpFormLandlord';
import SocialLogin from '../SocialLogin';
import Wrapper, {
  TitleInfo,
  Text,
  FormWrapper,
  BannerWrapper,
} from '../Auth.style';
const { Title } = Typography;
import { useDispatch, useSelector } from 'react-redux';
import { switchtrue, switchfalse } from 'store/authSlice'


const SignUp = () => {

  const [isFormChange,setIsFormChange] = useState(true);
  const dispatcher = useDispatch();

  const handleformChange = (value) => {
    setIsFormChange(value)
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
          {isFormChange  ? <Title level={5}>Create Tenant Account</Title>  : <Title level={5}>Create Landlord Account</Title> }
          <Radio.Group style={{ marginBottom: 15  }} size="large" defaultValue="Tenant" buttonStyle="solid" >
            <Radio.Button value = "Tenant" onChange={() => handleformChange(true)}>Tenant</Radio.Button>
            <Radio.Button value = "Landlord" onChange={() => handleformChange(false)} >Landlord</Radio.Button>
          </Radio.Group>
          {isFormChange  ? <SignUpFormTenant/> : <SignUpFormLandlord/>}
          <Title level={5}>Do you have account already?</Title>
          <Button type="default" style={{ width: 256 }} block onClick={() => dispatcher(switchfalse())}>
            Log in
          </Button>
        </FormWrapper>
        </Col>
      </Row>    
    </Wrapper>
  );
};

export default SignUp;
