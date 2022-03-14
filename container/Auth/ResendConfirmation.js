import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Button } from "antd";
import { handleLoading } from "store/authSlice";
import { resendConfirmation } from "store/services/auth";

const ResendConfirmation = (props) => {
  const dispatch = useDispatch();
  const { currentUser, loading } = useSelector((state) => state.auth);

  const reSendConfirmation = () => {
    dispatch(handleLoading(true));
    dispatch(resendConfirmation({ email: currentUser.email }));
  };

  return (
    <>
      {currentUser && currentUser.email_confirmed && (
        <Alert
          message={`Please confirm your email address to verify your account as soon as possible. A confirmation email was sent to ${
            currentUser && currentUser.email
          }.`}
          type="info"
          showIcon
          action={
            <Button
              type="primary"
              loading={loading}
              onClick={reSendConfirmation}
            >
              Resend confirmation
            </Button>
          }
        />
      )}
    </>
  );
};

export default ResendConfirmation;
