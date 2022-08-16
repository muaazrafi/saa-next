import React, { useEffect } from "react";
import { Row, Col, Breadcrumb, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import Dropdown from "./DropDown";
import { SearchOutlined } from "@ant-design/icons";
import ArticleData from "./ArticleData";
import { useDispatch, useSelector } from "react-redux";
import { handleLoading } from "../../../store/helpArticlesSlice";
import { fetchHelpArticles } from "../../../store/services/helpArticles";
const ManageBookingLayout = () => {
  const { help_articles, loading } = useSelector(
    (state) => state.articles.help_Articles,
  );
  const router = useRouter();
  const articleParam = router.query.article;

  const dispatch = useDispatch();
  useEffect(() => {
    if (articleParam) {
      dispatch(handleLoading(true));
      dispatch(fetchHelpArticles(articleParam));
    }
  }, [articleParam]);

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
        <Dropdown className='dropDownMenu' />

        <Row gutter={[20, 40]}>
          <Col lg={4}>
            <h3 className='articleSection'>Article in this section</h3>
            <div className='NavSlider'>
              {help_articles && help_articles.map((link) => {
                return (
                  <Link href={`/help/articles/${link.slug}`}>
                    <div
                      className={`${
                        router.pathname === link.slug && "selected"
                      } extend`}>
                      <p className='linked'>{link.title}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Col>
          <Col lg={16} md={24} sm={24} xs={24}>
            <ArticleData />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ManageBookingLayout;
