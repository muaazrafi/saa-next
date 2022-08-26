import React, { useEffect } from "react";
import { Row, Col, Breadcrumb } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import Dropdown from "./DropDown";

import ArticleData from "./ArticleData";
import "react-perfect-scrollbar/dist/css/styles.css";
import ScrollBar from "react-perfect-scrollbar";
import { useDispatch, useSelector } from "react-redux";
import { handleLoading } from "../../../store/helpArticlesSlice";
import { fetchHelpArticles } from "../../../store/services/helpArticles";
import { fetchCategories } from "../../../store/services/help";
const ManageBookingLayout = () => {
  const { help_articles } = useSelector(
    (state) => state.articles.help_Articles,
  );
  const { categories } = useSelector((state) => state.help);
  const router = useRouter();
  const articleParam = router.query.article;

  const dispatch = useDispatch();
  useEffect(() => {
    if (articleParam) {
      dispatch(handleLoading(true));
      dispatch(fetchHelpArticles(articleParam));
    }
  }, [articleParam]);
  useEffect(() => {
    dispatch(handleLoading(true));
    dispatch(fetchCategories());
  }, []);
  return (
    <>
      <div className='container'>
        <div className='main-bookingheader'>
          <Breadcrumb separator='>' className='breadcrumb'>
            <Breadcrumb.Item href='/help'>
              StudyAboardApartement
            </Breadcrumb.Item>
            <Breadcrumb.Item href={`/help/categories/${categories.slug}`}>
              {categories.title}
            </Breadcrumb.Item>
            {/* <Breadcrumb.Item
              href={`/help/section/${help_Articles.help_sub_category_slug}`}>
              {help_Articles.help_sub_category_title}
            </Breadcrumb.Item> */}
          </Breadcrumb>
        </div>
        <Dropdown className='dropDownMenu' />

        <Row gutter={[20, 40]}>
          <Col lg={4}>
            <h3 className='articleSection'>Article in this section</h3>
            <div className='NavSlider'>
              <ScrollBar>
                {help_articles &&
                  help_articles.map((link) => {
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
              </ScrollBar>
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
