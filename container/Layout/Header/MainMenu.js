import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "next/router";
import { Menu } from "antd";
import { handlePopUp } from "/store/authSlice";
import ActiveLink from "library/helpers/activeLink";

import { HOME_PAGE } from "settings/constant";

const MainMenu = ({ className, router }) => {
  const dispatch = useDispatch();
  const { currentUser, loading } = useSelector((state) => state.auth);

  return (
    <>
      <Menu className={className}>
        {/* <Menu.Item key="0">
          <ActiveLink
            className={router.pathname === HOME_PAGE ? "active" : ""}
            href={`${HOME_PAGE}`}
          >
            Become a Rep
          </ActiveLink>
        </Menu.Item> */}

        <Menu.Item key="1">
          {!currentUser && !loading && (
            <a onClick={() => { dispatch(handlePopUp(true)); } }>List a property</a>
          )}
          {
            (currentUser && currentUser.role == 'provider') &&
            <a href='/landloard'>List a property</a>
          }
        </Menu.Item>
      </Menu>
    </>
  );
};

export default withRouter(MainMenu);
