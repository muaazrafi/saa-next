import React from "react";
import { Row, Col, Input, Button } from "antd";
import TenantsLinks from "./TenantsLinks";
import { SearchOutlined } from "@ant-design/icons";

const Tenants = () => {
  return (
    <>
      <div className='main-tenants'>
        <Input
          prefix={<SearchOutlined />}
          className='search-box'
          type='text'
          placeholder='search'
          size='large'
          style={{
            width: "300px",
            marginTop: "20px",
            marginRight: "50px",
            borderRadius: "16px",
            float: "right",
          }}
        />
      </div>
      <div className='tenantsContainer'>
        <h2 className='tenantHeading'>Tenants</h2>
        <Row>
          <Col span={12} style={{ padding: "20px" }}>
            <h3 className='textTenants'>Getting Started</h3>
            <TenantsLinks title='No discrimination policy' />

            <TenantsLinks title='How does StudyAboardApartement works' />

            <TenantsLinks title='Does StudyAboardApartment organise viewings?' />

            <TenantsLinks title='How do I search for my new home?' />

            <TenantsLinks title='How do I know if the Apartment is available?' />

            <TenantsLinks title='Can I contact the Landlord before booking?' />
          </Col>
          <Col span={12} style={{ padding: "20px" }}>
            <h3 className='textTenants'>House Rule</h3>
            <TenantsLinks title='What are the House Rules?' />

            <TenantsLinks title='Is local registration possible?' />

            <TenantsLinks title='Who will I be sharing the property with?' />

            <TenantsLinks title='What are the Landlord Policies?' />

            <TenantsLinks title='What is the admin fee?' />

            <TenantsLinks title='About the Security Deposit' />
          </Col>
        </Row>
        <Row>
          <Col span={12} style={{ padding: "20px" }}>
            <h3 className='textTenants'>Booking Process</h3>
            <TenantsLinks title='Why do Spotahome use LEM Verify?' />

            <TenantsLinks title='What is the 3D Secure?' />

            <TenantsLinks title='How can i book?' />

            <TenantsLinks title='How can I manage my booking request?' />

            <TenantsLinks title='What is an instant booking?' />

            <TenantsLinks title='Why has my payment method failed?' />
          </Col>
          <Col span={12} style={{ padding: "20px" }}>
            <h3 className='textTenants'>Manging my Bookings</h3>
            <TenantsLinks title='Extend my ongoing Booking' />

            <TenantsLinks title='Cancellation Policy before 2nd of March 2022' />

            <TenantsLinks title='StudyAboardApartments Guarantees and Force Majeure for Tenants' />

            <TenantsLinks title='StudyAboardApartments Cancellation Policy' />

            <TenantsLinks title='Help - I have moving issues with my property' />

            <TenantsLinks title='Changes in my dates' />
          </Col>
        </Row>
        <Row>
          <Col span={12} style={{ padding: "20px" }}>
            <h3 className='textTenants'>Manging my Account</h3>
            <TenantsLinks title='Does Spotahome close user’s accounts?' />

            <TenantsLinks title='Create and Manage My Account' />

            <TenantsLinks title='My Services' />

            <TenantsLinks title='My Bookings' />

            <TenantsLinks title='My Payments' />

            <TenantsLinks title='My Alerts' />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Tenants;
