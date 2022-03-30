import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import ActiveLink from "library/helpers/activeLink";
import { Row, Col, Menu, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Container from "components/UI/Container/Container.style";
import { AGENT_PROFILE_PAGE } from "settings/constant";
import VerifyAuth from "container/Auth/VerifyAuth";

import AccountSettingWrapper, {
  AccountSidebar,
  AgentAvatar,
  SidebarMenuWrapper,
  ContentWrapper,
  AgentName,
  FromWrapper,
} from "./AccountSettings.style";

const UpdateInfo = dynamic(() =>
  import("container/Auth/UpdateInfo")
);

const ChangePassWord = dynamic(() => import("./ChangePassWordForm"));

export default function AgentAccountSettingsPage(props) {
  const [currentRoute, setCurrentRoute] = useState("edit-profile");
  const { currentUser } = useSelector((state) => state.auth);
  return (
    <AccountSettingWrapper>
      <VerifyAuth />
      <Container fullWidth={true}>
        <Row gutter={30}>
          <Col md={9} lg={6}>
            <AccountSidebar>
              <AgentAvatar>
                <Avatar
                  style={{ fontSize: "62px", paddingTop: "10px" }}
                  icon={<UserOutlined />}
                />
                <ContentWrapper>
                  {currentUser && (
                    <AgentName>
                      {currentUser.first_name} {currentUser.last_name}
                    </AgentName>
                  )}

                  <ActiveLink href={`${AGENT_PROFILE_PAGE}`}>
                    View Dashboard
                  </ActiveLink>
                </ContentWrapper>
              </AgentAvatar>
              <>
                <SidebarMenuWrapper>
                  <Menu
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1"]}
                    mode="inline"
                  >
                    <Menu.Item key="1">
                      <a onClick={() => setCurrentRoute("edit-profile")}>
                        Edit Profile
                      </a>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <a onClick={() => setCurrentRoute("change-password")}>
                        Change Password
                      </a>
                    </Menu.Item>
                  </Menu>
                </SidebarMenuWrapper>
              </>
            </AccountSidebar>
          </Col>
          <Col md={15} lg={18}>
            <FromWrapper>
              {currentRoute === "edit-profile"
                ? currentUser && <UpdateInfo user={currentUser} onlyUpdateInfo={true} />
                : ""}
              {currentRoute === "change-password" ? <ChangePassWord /> : ""}
            </FromWrapper>
          </Col>
        </Row>
      </Container>
    </AccountSettingWrapper>
  );
}
