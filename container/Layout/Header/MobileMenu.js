import React from "react";
import { Menu } from "antd";
import ActiveLink from "library/helpers/activeLink";

import {
  AGENT_PROFILE_PAGE,
  AGENT_ACCOUNT_SETTINGS_PAGE,
} from "settings/constant";

const MobileMenu = ({ className, loggedIn }) => {
  // auth context
  const logOut = () => {
    console.log("Worabke");
  };

  return (
    <Menu className={className}>
      {loggedIn && (
        <>
          <Menu.Item key="0">
            <ActiveLink href={AGENT_PROFILE_PAGE}>View Profile</ActiveLink>
          </Menu.Item>
          <Menu.Item key="1">
            <ActiveLink href={AGENT_ACCOUNT_SETTINGS_PAGE}>
              Account Settings
            </ActiveLink>
          </Menu.Item>
          <Menu.Item key="2">
            <button onClick={logOut}>Log Out</button>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
};

export default MobileMenu;
