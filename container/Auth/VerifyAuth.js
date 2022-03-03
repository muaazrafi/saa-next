import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';
import { notification } from "antd";

export default function VerifyAuth(props) {
  const router = useRouter();
  const { currentUser, loading } = useSelector( state => state.auth );

  useEffect( () => {
    
    if(!currentUser && !loading ) {
      router.push('/');
      notification['error']({
        message: 'Login Faild',
        description:
          'Please login before you continue.',
      });
    }
  }, [currentUser]);

  return (
    <></>
  );

}

