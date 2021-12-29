import {React,useState,useEffect} from 'react';
import { withRouter } from 'next/router';
import { Menu,Modal, Button } from 'antd';
import ActiveLink from 'library/helpers/activeLink';
import SignIn from 'container/Auth/SignIn/SignIn';
import SignUp from 'container/Auth/SignUp/SignUp';

import {
  HOME_PAGE,
  LOGIN_PAGE,
  LISTING_POSTS_PAGE,
  AGENT_PROFILE_PAGE,
  PRICING_PLAN_PAGE,
} from 'settings/constant';

const MainMenu = ({ className, router }) => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalSwitch, setIsModalSwitch] = useState("");


// useEffect(() => {
//   },[isModalSwitch]);

  const showModal = (value) => {
    setIsModalVisible(true);
    setIsModalSwitch(value);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setIsModalSwitch("");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsModalSwitch(" ");
  };

  return (
  <>
    <Modal title=""  bodyStyle ={{padding: 0 , fontSize: 0}} centered footer={null} header={null} visible={isModalVisible} onOk={handleOk}  onCancel={handleCancel} width={800}>
      {isModalSwitch == 'SignUp' ? <SignUp/> : <SignIn/> }
    </Modal>
      
    <Menu className={className}>
      <Menu.Item key="0">
        <ActiveLink
          className={router.pathname === HOME_PAGE ? 'active' : ''}
          href={`${HOME_PAGE}`}
        >
           Become a Rep 
        </ActiveLink>
      </Menu.Item>
     

      <Menu.Item key="1">
        <ActiveLink
          className={router.pathname === LISTING_POSTS_PAGE ? 'active' : ''}
          href={`${LISTING_POSTS_PAGE}`}
        >
           List a property
        </ActiveLink>
      </Menu.Item>
      {/* <Menu.Item key="2">
        <ActiveLink
          className={router.pathname === AGENT_PROFILE_PAGE ? 'active' : ''}
          href={`${AGENT_PROFILE_PAGE}`}
        >
          Agent
        </ActiveLink>
      </Menu.Item>
      

      <Menu.Item key="3">
        <ActiveLink
          className={router.pathname === PRICING_PLAN_PAGE ? 'active' : ''}
          href={`${PRICING_PLAN_PAGE}`}
        >
          Pricing
        </ActiveLink>
      </Menu.Item> */}

      <Menu.Item key="4">
        <Button  onClick={ () => showModal("SignIn")} >
          Log in
        </Button>
      </Menu.Item>
      <Menu.Item key="5">
        <Button  onClick={() => showModal("SignUp")} >
          Sign Up 
        </Button>
      </Menu.Item>
    </Menu>
  </>

  );
};

export default withRouter(MainMenu);
