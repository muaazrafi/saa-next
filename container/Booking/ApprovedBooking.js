import React from 'react';
import { Row, Col, Card } from 'antd';

const ApprovedBooking = ({booking}) => { 
  return (
    <Card title={`Booking ID ${booking.id}`}>
      <Row gutter={16} >
        <Col md={12} sm={24} xs={24} >
          <Card title='Landlord Information'>
            {booking.pending_balance}
          </Card>
          <br />
          <Card title='Amount Paid'>
            
          </Card>
          <br />
          <Card title='Tenants'>
            
          </Card>
          <br />
          <Card title='Invite Friends'>
            
          </Card>
        </Col>
        <Col md={12} sm={24} xs={24} >
          <Card title='Apartment Name'>
              
          </Card>
        </Col>
      </Row>
    </Card>
  )
}

export default ApprovedBooking;