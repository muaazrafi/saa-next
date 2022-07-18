import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Row, Col, Input, Button } from "antd";
import { RecentActivity } from "./RecentActivity";

const HelpCenter = () => {
  const recent = [
    {
      title: "Manage Booking ",
      subTitle: "Extend My ongoing Booking",
      titleHref: "/help/section/myArticle",
      createdAt: "Article created 3 months ago",
      subTitleHref: "/help/articles/myArticle",
    },
    {
      title: "Manage Booking ",
      subTitle: "Extend My ongoing Booking",
      titleHref: "/help/section/myArticle",
      createdAt: "Article created 3 months ago",
      subTitleHref: "/help/articles/myArticle",
    },
    {
      title: "Manage Booking ",
      subTitle: "Extend My ongoing Booking",
      titleHref: "/help/section/myArticle",
      createdAt: "Article created 3 months ago",
      subTitleHref: "/help/articles/myArticle",
    },
    {
      title: "Manage Booking ",
      subTitle: "Extend My ongoing Booking",
      titleHref: "/help/section/myArticle",
      createdAt: "Article created 3 months ago",
      subTitleHref: "/help/articles/myArticle",
    },
    {
      title: "Manage Booking ",
      subTitle: "Extend My ongoing Booking",
      titleHref: "/help/section/myArticle",
      createdAt: "Article created 3 months ago",
      subTitleHref: "/help/articles/myArticle",
    },
    {
      title: "Manage Booking ",
      subTitle: "Extend My ongoing Booking",
      titleHref: "/help/section/myArticle",
      createdAt: "Article created 3 months ago",
      subTitleHref: "/help/articles/myArticle",
    },
  ];

  return (
    <>
      <div className='hero'>
        <Input
          prefix={<SearchOutlined />}
          className='search-box'
          type='text'
          placeholder='search'
          size='large'
          style={{ width: "400px", borderRadius: "16px" }}
        />
      </div>
      <div className='container'>
        <Row gutter={[20, 20]}>
          <Col className='BtnCol' lg={12} md={12} sm={24} xs={24}>
            <Button
              className='help-btn'
              href='help/categories/tenants'
              size='large'>
              <p className='helpButton'>Tenants</p>
            </Button>
          </Col>

          <Col className='BtnCol' lg={12} md={12} sm={24} xs={24}>
            <Button
              className='help-btn'
              href='help/categories/landlords'
              size='large'>
              <p className='helpButton'>Landlords</p>
            </Button>
          </Col>
        </Row>
        <div className='ArticleRecent'>
          <div className='recent'>
            <h1 className='recentHeading'>Recent Activity</h1>
          </div>
          <RecentActivity arrayLinks={recent} />
        </div>
      </div>
    </>
  );
};

export default HelpCenter;
