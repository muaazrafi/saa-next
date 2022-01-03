import React from 'react';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import ForgetPassword from 'container/Auth/ForgetPassword';
import {useSelector } from 'react-redux';

const SwitchCom = () => {
  const { auth_component_switch } = useSelector(state => state.auth);
  const components = {
    in: SignIn,
    up: SignUp,
    forgot: ForgetPassword
  }
  const TagName = components[auth_component_switch];
  return (<>
    <TagName />
  </>)
}

export default SwitchCom;