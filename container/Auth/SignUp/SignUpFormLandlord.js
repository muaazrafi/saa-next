import React, { useContext } from 'react';
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { MdLockOpen } from 'react-icons/md';
import { Form, Button, Checkbox, Input, Switch ,Typography} from 'antd';
import FormControl from 'components/UI/FormControl/FormControl';
import { AuthContext } from 'context/AuthProvider';
import { FORGET_PASSWORD_PAGE } from 'settings/constant';
import { FieldWrapper, SwitchWrapper, Label } from '../Auth.style';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const { Title } = Typography;


const SignUpForm = () => {

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <Form name="normal_login" className="login-form" initialValues={{remember: true,}} onFinish={onFinish}>
        <Form.Item
              name="First Name"
              noStyle
              rules={[{ required: true, message: 'Firstname is required' }]}
            >
              <Input style={{ width: 256 , marginBottom: 10  }} placeholder="First Name" />
        </Form.Item>
        
        <Form.Item
              name="First Name"
              noStyle
              rules={[{ required: true, message: 'Lastname is required' }]}
            >
              <Input style={{ width: 256 , marginBottom: 10  }} placeholder="Last Name" />
        </Form.Item>
        
        <Form.Item
          name="First Name"
            noStyle
            rules={[{ required: true, message: 'Email is required' }]}
          >
            <Input style={{ width: 256 , marginBottom: 10  }} placeholder="(201) 555-0123" />
        </Form.Item>

        <Form.Item
              name="First Name"
              noStyle
              rules={[{ required: true, message: 'Email is required' }]}
            >
              <Input style={{ width: 256 , marginBottom: 10  }} placeholder="Email" />
        </Form.Item>
        
        <Form.Item
              name="First Name"
              noStyle
              rules={[{ required: true, message: 'Password' }]}
            >
              <Input style={{ width: 256 , marginBottom: 10  }} placeholder="Password" />
        </Form.Item>
                <Form.Item
              name="First Name"
              noStyle
              rules={[{ required: true, message: 'Password' }]}
            >
              <Input style={{ width: 256 , marginBottom: 10  }} placeholder='Eastern Time (US & Canada)' />
        </Form.Item>

        <Form.Item>
          <Button type="primary" style={{ width: 256 }} htmlType="submit" block  >
            Continu
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};


export default SignUpForm;
