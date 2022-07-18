import React from "react";
import { Row, Col, Breadcrumb, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import Dropdown from "./DropDown";
import { SearchOutlined } from "@ant-design/icons";
import ArticleData from "./ArticleData";

const ManageBookingLayout = ({ articleData }) => {
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

  return (
    <>
      <div className='container'>
        <div className='main-bookingheader'>
          <Breadcrumb separator='>' className='breadcrumb'>
            <Breadcrumb.Item>StudyAboardApartement</Breadcrumb.Item>
            <Breadcrumb.Item href='/help/categories/tenants'>
              Tenants
            </Breadcrumb.Item>
            <Breadcrumb.Item href='/help/section/myArticle'>
              Manging My Bookings
            </Breadcrumb.Item>
          </Breadcrumb>
          <Input
            prefix={<SearchOutlined />}
            className='searchbooking'
            type='text'
            placeholder='search'
            size='large'
          />
        </div>
        <Dropdown className='dropDownMenu' />
        <div>
          <h3 className='articleSection' style={{ fontWeight: "bold" }}>
            Article in this section
          </h3>
        </div>
        <Row>
          <Col lg={4}>
            <div className='NavSlider'>
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
            </div>
          </Col>
          <Col lg={19} md={24} sm={24} xs={24}>
            <ArticleData articleData={articleData} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ManageBookingLayout;
