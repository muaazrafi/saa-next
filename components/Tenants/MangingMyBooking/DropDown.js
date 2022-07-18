import React from "react";
import { Dropdown, Menu, Space } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { DownOutlined } from "@ant-design/icons";
const DropDown = () => {
  const tenantsLinks = [
    {
      title: "Extend my ongoing Bookings",
      href: "/help/articles/mycontract",
    },
    {
      title: "Cancellation Policy before 2nd of March 2022",
      href: "/help/articles/mycontract",
    },
    {
      title: "Spotahome Guarantees and Force Majeure for Tenants",
      href: "/help/articles/mycontract",
    },
    {
      title: "Spotahome Cancellation Policy",
      href: "/help/articles/mycontract",
    },
    {
      title: "Help - I have moving issues with my property",
      href: "/help/articles/mycontract",
    },
    {
      title: "Changes in my dates",
      href: "/help/articles/changesindate",
    },
    {
      title: "My Contract",
      href: "/help/articles/mycontract",
    },
  ];
  const router = useRouter();
  const menu = (
    <Menu>
      <Menu.Item>
        {tenantsLinks?.map((link) => {
          return (
            <Link href={link.href}>
              <div
                className={`${
                  router.pathname === link.href && "selected"
                } extend`}>
                <p className='linked'>{link.title}</p>
              </div>
            </Link>
          );
        })}
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu}>
        <a onClick={(e) => e.preventDefault()}>
          <Space className='dropMenu'>
            Article in this section
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </>
  );
};

export default DropDown;
