import React, { useEffect } from "react";
import { Avatar, Row, Col } from "antd";
import {
  UserOutlined,
  TwitterCircleFilled,
  LinkedinOutlined,
  FacebookOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import RecentViewedArticles from "./RecentViewedArticles";
import RelatedArticles from "./RelatedArticles";
import renderHTML from "react-render-html";
import { Skeleton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { handleLoading } from "../../../store/helpArticlesSlice";
import { fetchHelpArticles } from "../../../store/services/helpArticles";
const ArticleData = ({ articleData }) => {
  const { help_Articles, loading } = useSelector((state) => state.articles);

  const dispatch = useDispatch();
  useEffect(() => {
    if (help_Articles.length === 0) {
      dispatch(handleLoading(true));

      dispatch(fetchHelpArticles());
    }
  }, []);

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
              <span className='authorName'>{articleData?.aurthorName}</span>
              <br />
              <span className='update-Date'>
                {articleData?.updateDate} - Updated
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
            <>{help_Articles && renderHTML(help_Articles.description)}</>
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
          <small>
            <span className='articleCount'>{articleData.articleCount}</span>
          </small>
        </div>
        <div className='ArticleSection'>
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
        </div>
      </div>
    </>
  );
};

export default ArticleData;
