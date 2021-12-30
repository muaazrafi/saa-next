import React from 'react';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

const SwitchCom = ({ comName }) => {
  const components = {
    in: SignIn,
    up: SignUp
  }

  const TagName = components[comName];
  console.log("Teri photo:", comName)
  return (<>
    <TagName />
  </>)
}

export default SwitchCom;