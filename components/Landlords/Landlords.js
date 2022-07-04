import React from "react";
import { Row, Col, Input, Button } from "antd";
import LandlordsLink from "./LandlordsLink";
import { SearchOutlined } from "@ant-design/icons";
const Landlords = () => {
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
            <h3 className='textlandlords'>Getting Started</h3>
            <LandlordsLink title='No discrimination policy' />

            <LandlordsLink title='How does StudyAboardApartement works' />

            <LandlordsLink title='What are the advantages of listing my property with StudyAbroadApartment?' />

            <LandlordsLink title='Is StudyAbroadApartment’s service free for the landlord?' />

            <LandlordsLink title='Who can become a StudyAbroadApartments Landlord?' />

            <LandlordsLink title='What type of properties can I list on StudyAbroadApartment?' />
          </Col>
          <Col span={8} md={12} sm={24} className='landlord1'>
            <h3 className='textlandlords'>Listing Your Property</h3>
            <LandlordsLink title='How can I list my property on the website?' />

            <LandlordsLink title='How can I change the date or cancel a photo session?' />

            <LandlordsLink title='How will I know when my property listing is published?' />

            <LandlordsLink title='How long will it take to rent my property through StudyAbroadApartment?' />

            <LandlordsLink title='What are the Landlord Policies I can set?' />
          </Col>
        </Row>
        <Row className='landcont'>
          <Col span={8} md={12} sm={24} className='landlord2'>
            <h3 className='textlandlords'>
              Manage Your Account / Landlord Panel
            </h3>
            <LandlordsLink title='Does Spotahome close user’s accounts?' />
            <LandlordsLink title='F.A.Q Premium Service' />
            <LandlordsLink title='Premium Service' />
            <LandlordsLink title='What can I do in the Landlord Panel?' />
            <LandlordsLink title='How does Spotahome use my personal data?' />
            <LandlordsLink title='How can I change the availability/occupancy of my properties?' />
          </Col>
          <Col span={8} md={12} sm={24} className='landlord2'>
            <h3 className='textlandlords'>Bookings</h3>
            <LandlordsLink title='GoCardless for UK Landlords' />

            <LandlordsLink title='How do I know if I have a new booking request?' />

            <LandlordsLink title='When can I find information about a booking?' />

            <LandlordsLink title='How can I manage a booking?' />

            <LandlordsLink title='When will I receive the first payment?' />

            <LandlordsLink title='How do I cancel a booking?' />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Landlords;
