import React from "react";
import { Row, Col, Input, Breadcrumb } from "antd";
import MangingBookingsLink from "./MangingBookingsLink";
import { SearchOutlined } from "@ant-design/icons";

const MangingMyBookings = () => {
  const manage = [
    {
      title: "No discrimintation Policy",
      href: "/help/articles/myArticle",
    },
    {
      title: "Non discrimination policy",
      href: "/help/articles/myArticles",
    },
    {
      title: "Non discrimination policy",
      href: "/help/articles/myArticles",
    },
    {
      title: "Non discrimination policy",
      href: "/help/articles/myArticles",
    },
    {
      title: "Non discrimination policy",
      href: "/help/articles/myArticles",
    },
    {
      title: "Non discrimination policy",
      href: "/help/articles/myArticles",
    },
  ];

  return (
    <>
      <div className='container'>
        <div className='main-bookingheader'>
          <Breadcrumb separator='>' className='breadcrumb'>
            <Breadcrumb.Item href='/help'>
              StudyAboardApartement
            </Breadcrumb.Item>
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

        <MangingBookingsLink
          mainTitle='Managing My Bookings'
          arrayLinks={manage}
        />
      </div>
    </>
  );
};

export default MangingMyBookings;
