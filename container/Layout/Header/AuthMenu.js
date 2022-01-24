import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Menu,Modal, Spin } from 'antd';
import SwitchCom from 'container/Auth/SwitchCom';
import { fetchMe } from 'store/services/auth';
import { switchin, switchup, handlePopUp } from 'store/authSlice';

const AuthMenu = ({ className }) => {
  const { loading, currentUser, popUp } = useSelector( state => state.auth );
  const dispatcher = useDispatch();
  
  useEffect( () => {
    dispatcher(fetchMe());
  },[]);

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
    <>
    </>
    {
      (!loading && !currentUser ) &&
      <Menu className={className}>
        <Menu.Item key="1">
          <a onClick={ () => showModal("in")} >
            Log in
          </a>
        </Menu.Item>
        <Menu.Item key="2">
          <a  onClick={() => showModal("up")} >
            Sign Up 
          </a>
        </Menu.Item>        
      </Menu>
    }
    {
      loading &&
      <Menu className={className}>
        <Menu.Item key="3">
          <Spin />
        </Menu.Item>
      </Menu> 
    }
    </>
  );
};

export default AuthMenu;


