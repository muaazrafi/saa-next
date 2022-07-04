import React from "react";
import { Row, Col, Input, Button, Breadcrumb } from "antd";
import MangingBookingsLink from "./MangingBookingsLink";
import { SearchOutlined } from "@ant-design/icons";

const MangingMyBookings = () => {
  return (
    <>
      <div className='container'>
        <div className='main-bookingheader'>
          <Breadcrumb separator='>' className='breadcrumb'>
            <Breadcrumb.Item>StudyAboardApartement</Breadcrumb.Item>
            <Breadcrumb.Item href='categories/tenants'>Tenants</Breadcrumb.Item>
            <Breadcrumb.Item href=''>Manging My Bookings</Breadcrumb.Item>
          </Breadcrumb>
          <Input
            prefix={<SearchOutlined />}
            className='searchbooking'
            type='text'
            placeholder='search'
            size='large'
          />
        </div>
        <div className='page-header'>
          <h2 className='BookingHeading'>Manging My Bookings</h2>
          <div>
            <a className='followbtn'>follow</a>
          </div>
        </div>
        <Row>
          <Col span={24} className='bookingContainer'>
            <MangingBookingsLink title='No discrimination policy' />

            <MangingBookingsLink title='How does StudyAboardApartement works' />

            <MangingBookingsLink title='Does StudyAboardApartment organise viewings?' />

            <MangingBookingsLink title='How do I search for my new home?' />

            <MangingBookingsLink title='How do I know if the Apartment is available?' />

            <MangingBookingsLink title='Can I contact the Landlord before booking?' />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default MangingMyBookings;
