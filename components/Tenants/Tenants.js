import React from "react";
import { Row, Col, Input, Breadcrumb } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import TenantsLinks from "./TenantsLinks";

const Tenants = () => {
  const tenants = [
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
        <div className='main-bookingheader'>
          <Breadcrumb separator='>' className='breadcrumb'>
            <Breadcrumb.Item href='/help'>
              StudyAboardApartement
            </Breadcrumb.Item>
            <Breadcrumb.Item href='/help/categories/tenants'>
              Tenants
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
        <div className='tenantsContainer'>
          <div className='tenantContents'>
            <h2 className='tenantHeading'>Tenants</h2>
            <Row>
              <Col
                lg={12}
                md={12}
                xs={24}
                style={{
                  padding: "20px",
                }}>
                <TenantsLinks
                  // arrayLinks={tenants}
                  mainTitle='Getting started'
                  href='/help/section/myArticle'
                />
              </Col>
              <Col
                lg={12}
                md={12}
                xs={24}
                style={{
                  padding: "20px",
                }}>
                <TenantsLinks
                  // arrayLinks={tenants}
                  mainTitle='House Rule'
                  href='/help/section/myArticle'
                />
              </Col>
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
