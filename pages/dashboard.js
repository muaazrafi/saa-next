import React from "react";
import VerifyAuth from "container/Auth/VerifyAuth";
import ResendConfirmation  from "/container/Auth/ResendConfirmation";
import Nav  from "/container/Dashboard/Nav";
import { FormContent } from "/container/Stylis/InnerContainer.style";

const Dashboard = (props) => {
  return (
    <>
      <VerifyAuth />
      <ResendConfirmation />
      <FormContent>
        <Nav current='profile' />
      </FormContent>
    </>
  );
};

export default Dashboard;
