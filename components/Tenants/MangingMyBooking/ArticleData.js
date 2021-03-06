import React from "react";
import { Avatar, Row, Col } from "antd";
import {
  UserOutlined,
  TwitterCircleFilled,
  LinkedinOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import RecentViewedArticles from "./RecentViewedArticles";
import RelatedArticles from "./RelatedArticles";
const ArticleData = ({ articleData }) => {
  const Managing = [
    {
      title: "no discrimination policy",
      href: "/help/articles/myArticle",
    },
    {
      title: "How does Spotahome work?",
      href: "/help/articles/myArticle",
    },

    {
      title: "Does Spotahome organise viewings?",
      href: "/help/articles/myArticle",
    },
    {
      title: "How do I search for my new home?",
      href: "/help/articles/myArticle",
    },
    {
      title: "How do I know if the property is available?",
      href: "/help/articles/myArticle",
    },
  ];
  const relateArticles = [
    {
      title: "no discrimination policy",
      href: "/help/articles/myArticle",
    },
    {
      title: "How does Spotahome work?",
      href: "/help/articles/myArticle",
    },

    {
      title: "Does Spotahome organise viewings?",
      href: "/help/articles/myArticle",
    },
    {
      title: "How do I search for my new home?",
      href: "/help/articles/myArticle",
    },
    {
      title: "How do I know if the property is available?",
      href: "/help/articles/myArticle",
    },
  ];
  return (
    <>
      <div className='container'>
        <h1 className='extendHeader'>{articleData?.title}</h1>
        <div className='extendHeading'>
          <div>
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
            <span
              style={{
                position: "absolute",
              }}>
              <span>{articleData?.aurthorName}</span>
              <br />
              <span>{articleData?.updateDate} - Updated</span>
            </span>
          </div>
          <div>
            <a className='followBtn'>follow</a>
          </div>
        </div>

        <div
          style={{
            paddingTop: "50px",
          }}>
          {articleData?.description}
        </div>
        <div className='socialMedia'>
          <div className='socialIcons'>
            <FacebookOutlined className='socialIcon' />

            <TwitterCircleFilled className='socialIcon' />
            <LinkedinOutlined className='socialIcon' />
          </div>
        </div>
        <div className='article-footer'>
          <span>Was this article Helpful</span>
          <div className='article-vote'>
            <a className='articlebtn'>Yes</a>
            <a className='articlebtn'>No</a>
          </div>
          <small>
            <span>1 out of 5 found this helpful</span>
          </small>
        </div>
        <div className='ArticleSection'>
          <Row>
            <Col span={12}>
              <h3 className='articleHeadline'>Recently viewed articles</h3>
              <div className='recentView'>
                <RecentViewedArticles
                  arrayLinks={Managing}
                  href='/help/section/myArticle'
                />
              </div>
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
              <h3 className='articleHeadline'>Related articles</h3>
              <div className='relatedArticle'>
                <RelatedArticles
                  arrayLinks={relateArticles}
                  href='/help/section/myArticle'
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ArticleData;
