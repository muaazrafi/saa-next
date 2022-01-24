import { React } from 'react';
import { useDispatch } from 'react-redux';
import { unAuthenticate } from 'store/services/auth';

const LogOut = ( { className } ) => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(unAuthenticate());
  }

  return (
    <button onClick={logOut}>Log Out</button>
  );
};

export default LogOut;
