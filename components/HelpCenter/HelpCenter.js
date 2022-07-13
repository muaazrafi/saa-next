import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Row, Col, Input, Button } from "antd";
import { RecentActivity } from "./RecentActivity";

const HelpCenter = () => {
  return (
    <>
      <div className='hero'>
        <Input
          prefix={<SearchOutlined />}
          className='search-box'
          type='text'
          placeholder='search'
          size='large'
          style={{ width: "400px", borderRadius: "16px" }}
        />
      </div>
      <div className='container'>
        <Row>
          <Col>
            <Button
              className='help-btn'
              href='help/categories/tenants'
              size='large'>
              Tenants
            </Button>
          </Col>

          <Col>
            <Button
              className='help-btn'
              href='help/categories/landlords'
              size='large'>
              Landlords
            </Button>
          </Col>
        </Row>
        <hr
          style={{
            marginTop: "100px",
          }}
        />
        <div className='recent'>
          <h2>Recent Activity</h2>
        </div>
        <RecentActivity
          title='Managing My Bookings'
          subTitle='Extend my ongoing Bookings'
          createdAt='Article created 3 months ago'
        />

        <RecentActivity
          title='Managing My Account'
          subTitle="Does StudyAbroadApartments close user's accounts? "
          createdAt='Article created 3 months ago'
        />
        <RecentActivity
          title='Managing My Booking'
          subTitle='Cancellation Policy before 2nd of March 2022 '
          createdAt='Article created 4 months ago'
        />
        <RecentActivity
          title='Managing Your Account / Landlord Panel'
          subTitle="Does StudyAbroadApartments close user's accounts?"
          createdAt='Article created 8 months ago'
        />
        <RecentActivity
          title='Managing My Accounts'
          subTitle='Why do StudyApartment use LEM Verify?'
          createdAt='Article created 3 months ago'
        />
      </div>
    </>
  );
};

export default HelpCenter;