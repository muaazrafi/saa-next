import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';
import { notification } from "antd";

export default function VerifyAuth(props) {
  const router = useRouter();
  const { authFailed } = useSelector( state => state.auth );

  useEffect( () => {
    if(authFailed) {
      notification['error']({
        message: 'Login Faild',
        description:
          'Please login before you continue.',
      });
      router.push('/');
    }
  }, [authFailed]);

  return (
    <></>
  );

}

