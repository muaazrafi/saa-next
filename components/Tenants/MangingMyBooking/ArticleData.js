import React from "react";
import { Avatar, Row, Col } from "antd";
import {
  UserOutlined,
  TwitterCircleFilled,
  LinkedinOutlined,
  FacebookOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
// import RecentViewedArticles from "./RecentViewedArticles";
// import RelatedArticles from "./RelatedArticles";
import renderHTML from "react-render-html";
import { Skeleton } from "antd";
import { useSelector } from "react-redux";

const ArticleData = () => {
  const { help_Articles, loading } = useSelector((state) => state.articles);

  return (
    <>
      <div className='container'>
        <h1 className='extendHeader'>{help_Articles.title}</h1>
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
              <span className='authorName'>Brett N.</span>
              <br />
              <span className='update-Date'>
                {help_Articles.updated} Updated
              </span>
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
          {loading ? (
            <Skeleton active={true} />
          ) : (
            <>
              {help_Articles.description &&
                renderHTML(help_Articles.description)}
            </>
          )}
        </div>
        <div className='socialMedia'>
          <div className='socialIcons'>
            <a>
              <FacebookOutlined className='socialIcon' />
            </a>
            <a>
              <TwitterCircleFilled className='socialIcon' />
            </a>
            <a>
              <LinkedinOutlined className='socialIcon' />
            </a>
          </div>
        </div>
        <div className='article-footer'>
          <span>Was this article Helpful ?</span>
          <div className='article-vote'>
            <a className='articlebtn'>
              <CheckOutlined className='checkLine' />
              Yes
            </a>
            <a className='articlebtn'>
              <CloseOutlined className='checkLine' />
              No
            </a>
          </div>
        </div>
        {/* <div className='ArticleSection'>
          <Row>
            <Col lg={12} md={24} sm={24} xs={24}>
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
        </div> */}
      </div>
    </>
  );
};

export default ArticleData;
