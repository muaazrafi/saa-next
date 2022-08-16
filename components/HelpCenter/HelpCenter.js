import React, { useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Row, Col, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RecentActivity } from "./RecentActivity";
import { handleLoading } from "../../store/helpSlice";
import { fetchCategories } from "../../store/services/help";

const HelpCenter = () => {
  const { categories, loading } = useSelector((state) => state.help);
  const dispatch = useDispatch();

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(handleLoading(true));
      dispatch(fetchCategories());
    }
  }, [categories]);

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
            {categories.map((category) => {
              return (
                <Button
                  className='help-btn'
                  href={`/help/categories/${category.slug}`}
                  size='large'>
                  <p className='helpButton'>{category.title}</p>
                </Button>
              );
            })}
          </Col>
        </Row>
        <div className='ArticleRecent'>
          <div className='recent'>
            <h1 className='recentHeading'>Recent Activity</h1>
          </div>
          {loading && <RecentActivity arrayLinks={recent} />}
        </div>
      </div>
    </>
  );
};

export default HelpCenter;
