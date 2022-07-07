import React from "react";
import { Row, Col, Input, Button } from "antd";
import LandlordsLink from "./LandlordsLink";
import { SearchOutlined } from "@ant-design/icons";
const Landlords = () => {
  const landlords = [
    {
      title: "No discrimintion Policy",
      href: "/help/articles/myArticle",
    },
  ];
  return (
    <>
      <div className='main-landlords'>
        <Input
          prefix={<SearchOutlined />}
          className='search-box'
          type='text'
          placeholder='search'
          size='large'
          style={{
            width: "300px",
            marginTop: "20px",
            marginRight: "0px",
            marginLeft: "50px",
            borderRadius: "16px",
            float: "right",
          }}
        />
      </div>
      <h2 className='landlordHeading'>Landlords</h2>
      <div className='landlordsContainer'>
        <Row className='landcont'>
          <Col span={8} md={12} sm={24} className='landlord1'>
            <LandlordsLink
              arrayLinks={landlords}
              mainTitle='Getting started'
              href='/help/section/myArticle'
            />
          </Col>
          <Col span={8} md={12} sm={24} className='landlord1'>
            <LandlordsLink
              arrayLinks={landlords}
              mainTitle='Getting started'
              href='/help/section/myArticle'
            />
          </Col>
        </Row>
        <Row className='landcont'>
          <Col span={8} md={12} sm={24} className='landlord2'>
            <LandlordsLink
              arrayLinks={landlords}
              mainTitle='Getting started'
              href='/help/section/myArticle'
            />
          </Col>
          <Col span={8} md={12} sm={24} className='landlord2'>
            <LandlordsLink
              arrayLinks={landlords}
              mainTitle='Getting started'
              href='/help/section/myArticle'
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Landlords;
