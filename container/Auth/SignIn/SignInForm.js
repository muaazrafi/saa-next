import React, { useContext } from 'react';
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { MdLockOpen } from 'react-icons/md';
import { Form, Button, Checkbox, Input, Switch } from 'antd';
import FormControl from 'components/UI/FormControl/FormControl';
import { AuthContext } from 'context/AuthProvider';
import { FORGET_PASSWORD_PAGE } from 'settings/constant';
import { FieldWrapper, SwitchWrapper, Label } from '../Auth.style';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { switchforgot } from 'store/authSlice'


const SignInForm = () => {
  const dispatcher = useDispatch();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" style={{ width: 256 }}/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          style={{ width: 256 }}
        />
      </Form.Item>
      <Form.Item>
          <Button type="default" style={{ width: 256 }} block onClick={() => dispatcher(switchforgot("forgot"))}>
            Forgot password
          </Button>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: 256 }}>
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignInForm;
