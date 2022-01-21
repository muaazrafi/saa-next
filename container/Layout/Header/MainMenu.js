import {React,useState,useEffect} from 'react';
import { withRouter } from 'next/router';
import { useDispatch,useSelector } from 'react-redux';
import { Menu,Modal, Button } from 'antd';
import ActiveLink from 'library/helpers/activeLink';
import SwitchCom from 'container/Auth/SwitchCom';

import {
  HOME_PAGE,
  LISTING_POSTS_PAGE,
} from 'settings/constant';
import { switchin, switchup, handlePopUp } from 'store/authSlice'

const MainMenu = ( { className, router } ) => {
  const { popUp } = useSelector( state => state.auth );
  const dispatcher = useDispatch();
  
  const showModal = (value) => {
    dispatcher(handlePopUp(true));
    if(value=="in"){
      dispatcher(switchin())
    }else{
      dispatcher(switchup())
    }
  };
  
  const handleOk = () => {
    dispatcher(handlePopUp(false));
  };

  const handleCancel = () => {
    dispatcher(handlePopUp(false));
  };

  return (
  <>
    <Modal title=""  bodyStyle ={{padding: 0 , fontSize: 0}} centered footer={null} header={null} visible={popUp} onOk={handleOk}  onCancel={handleCancel} width={800}> 
       <SwitchCom/>
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
        <Button  onClick={ () => showModal("in")} >
          Log in
        </Button>
      </Menu.Item>
      <Menu.Item key="5">
        <Button  onClick={() => showModal("up")} >
          Sign Up 
        </Button>
      </Menu.Item>
    </Menu>
  </>

  );
};

export default withRouter(MainMenu);
