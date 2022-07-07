import React from "react";
import { Dropdown, Menu, Space } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { DownOutlined } from "@ant-design/icons";
const DropDown = () => {
  const tenantsLinks = {
    booking: "/help/articles/extendmybooking",
    CancellationPolicy: "/help/articles/cancellationpolicy",
    StudyAboardGuarantee: "/help/articles/StudyAbroadGuarantees",
    StudyAboardPolicy: "/help/articles/cancelltion",
    PropertyIssuesHelp: "/help/articles/propertyissues",
    DateChanges: "/help/articles/changesindate",
    Contract: "/help/articles/mycontract",
  };
  const router = useRouter();
  const menu = (
    <Menu>
      <Menu.Item>
        <Link href={tenantsLinks.booking}>
          <div
            className={`${
              router.pathname === tenantsLinks.booking && "selected"
            } extend`}>
            <p className='linked'>
              Extend My Ongoing <br />
              Booking
            </p>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={tenantsLinks.CancellationPolicy}>
          <div
            className={`${
              router.pathname === tenantsLinks.CancellationPolicy && "selected"
            } policy`}>
            <p className='linked'>
              Cancellation Policy before 2nd of March 2022
            </p>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={tenantsLinks.StudyAboardGuarantee}>
          <div
            className={`${
              router.pathname === tenantsLinks.StudyAboardGuarantee &&
              "selected"
            } guarantees`}>
            <p className='linked'>
              StudyAboardApartments Guarantees and Force Majeure for Tenants
            </p>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={tenantsLinks.StudyAboardPolicy}>
          <div
            className={`${
              router.pathname === tenantsLinks.StudyAboardPolicy && "selected"
            } Policy`}>
            <p className='linked'>StudyAboardApartement Cancellation Policy</p>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={tenantsLinks.PropertyIssuesHelp}>
          <div
            className={`${
              router.pathname === tenantsLinks.PropertyIssuesHelp && "selected"
            } issuesHelp`}>
            <p className='linked'>
              Help - I have moving issues with my property
            </p>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={tenantsLinks.DateChanges}>
          <div
            className={`${
              router.pathname === tenantsLinks.DateChanges && "selected"
            } changesDate`}>
            <p className='linked'>Changes in my dates</p>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={tenantsLinks.Contract}>
          <div
            className={`${
              router.pathname === tenantsLinks.Contract && "selected"
            } contracts`}>
            <p className='linked'>My Contract</p>
          </div>
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown className='dropMenu' overlay={menu}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Article in this section
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </>
  );
};

export default DropDown;
