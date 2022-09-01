import React, { useState, useRef } from "react";
import { Menu } from "antd";
import useOnClickOutside from "library/hooks/useOnClickOutside";
import ActiveLink from "library/helpers/activeLink";
import { useSelector } from "react-redux";
import LogOut from "./LogOut";
import {
  AGENT_PROFILE_PAGE,
  AGENT_ACCOUNT_SETTINGS_PAGE,
} from "settings/constant";

const ProfileMenu = ({ avatar }) => {
  const { currentUser } = useSelector((state) => state.auth);
  const [state, setState] = useState(false);

  const handleDropdown = () => {
    setState(!state);
  };

  const closeDropdown = () => {
    setState(false);
  };

  const dropdownRef = useRef(null);
  useOnClickOutside(dropdownRef, () => setState(false));

  return (
    <div className="avatar-dropdown" ref={dropdownRef}>
      <div className="dropdown-handler" onClick={handleDropdown}>
        {avatar}
      </div>
      {currentUser && (
        <Menu className={`dropdown-menu ${state ? "active" : "hide"}`}>
          <Menu.Item onClick={closeDropdown} key="0">
            <ActiveLink href={ (currentUser.role == 'provider') ? '/landlords' : AGENT_PROFILE_PAGE}>Dashboard</ActiveLink>
          </Menu.Item>
          <Menu.Item onClick={closeDropdown} key="2">
            <ActiveLink href={(currentUser.role == 'provider') ? '/landlords' : AGENT_ACCOUNT_SETTINGS_PAGE}>
              Account Settings
            </ActiveLink>
          </Menu.Item>
          <Menu.Item key="3">
            <LogOut />
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default ProfileMenu;
