import React, { useEffect } from "react";
import { Row, Col, Input, Breadcrumb } from "antd";
import { useRouter } from "next/router";
import { SearchOutlined } from "@ant-design/icons";
import TenantsLinks from "./TenantsLinks";
import { useDispatch, useSelector } from "react-redux";
import { handleLoading } from "../../store/helpSubCategoriesSlice";
import { fetchHelpSubCategories } from "../../store/services/helpSubCategories";
import { fetchCategories } from "../../store/services/help";

const Tenants = () => {
  const { helpArticles, loading } = useSelector(
    (state) => state.helpSubCategory,
  );
  const { categories } = useSelector((state) => state.help);
  const router = useRouter();
  const subCategory = router.query.subCategory;

  const dispatch = useDispatch();
  useEffect(() => {
    if (subCategory) {
      dispatch(handleLoading(true));
      dispatch(fetchHelpSubCategories(subCategory));
    }
  }, [subCategory]);
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
            {/* <Breadcrumb.Item href={`/help/categories/${categories.slug}`}>
                  {categories.title}
                </Breadcrumb.Item> */}
          </Breadcrumb>

          <Input
            prefix={<SearchOutlined />}
            className='searchbooking'
            type='text'
            placeholder='search'
            size='large'
          />
        </div>
        <div className='tenantsContainer'>
          <div className='tenantContents'>
            {/* <h2 className='tenantHeading'>Tenants</h2> */}
            <Row>
              {helpArticles.map((articles) => {
                return (
                  <Col
                    lg={12}
                    md={12}
                    xs={24}
                    style={{
                      padding: "20px",
                    }}>
                    <TenantsLinks
                      links={articles.help_articles}
                      mainTitle={articles.title}
                      href={`/help/section/${articles.slug}`}
                    />
                  </Col>
                );
              })}
            </Row>
            <Row>
              <Col lg={12} xs={24} md={12} style={{ padding: "20px" }}>
                {/* <TenantsLinks
                  arrayLinks={tenants}
                  mainTitle='Booking Process'
                  href='/help/section/myArticle'
                /> */}
              </Col>
              <Col
                lg={12}
                xs={24}
                md={12}
                size='small'
                style={{ padding: "20px" }}>
                {/* <TenantsLinks
                  arrayLinks={tenants}
                  mainTitle='Manage My Bookings'
                  href='/help/section/myArticle'
                /> */}
              </Col>
            </Row>
            <Row>
              <Col lg={12} xs={24} md={12} style={{ padding: "20px" }}>
                {/* <TenantsLinks
                  arrayLinks={tenants}
                  mainTitle='Manage My Account'
                  href='/help/section/myArticle'
                /> */}
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tenants;
