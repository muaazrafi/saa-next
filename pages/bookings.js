import React from "react";
import VerifyAuth from "container/Auth/VerifyAuth";
import ResendConfirmation from "/container/Auth/ResendConfirmation";

import { FormContent } from "/container/Stylis/InnerContainer.style";

const Dashboard = (props) => {

  return (
    <>
      <VerifyAuth />
      <ResendConfirmation />
      <FormContent>
        
      </FormContent>
    </>
  );
};

export default Dashboard;
