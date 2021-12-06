import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';
import {Row,Col,Divider} from 'antd';
import AccommodationPoliciesArea, { AccommodationPolicieswrapper } from './AccommodationPolicies.style';
import { Element } from 'react-scroll';


const AccommodationPolicies = ({
  titleStyle,
  titleStyleAP,
  detailstyle,
}) => {
  return (
    <Element name="AccommodationPolicies" className="AccommodationPolicies">
      
      <AccommodationPoliciesArea>
        <Heading as="h2" content="Accommodation Policies" {...titleStyleAP} />
        <AccommodationPolicieswrapper>
          
          <Row gutter={[24, 24]}>
            <Col span={8}>
              <Heading content="Rent & Bills"{...titleStyle}/>
            </Col>
            <Col span={16}>
              <Text  style={{ margin: '20px !important' }} content="Rent and utilities are due every 30 days.."
                {...detailstyle}/>
            </Col>
          </Row>

          <Row gutter={[24, 24]}>
            <Col span={8}>
              <Heading  content="Security Deposit"{...titleStyle}/>
            </Col>
            <Col span={16}>
                <Text  style={{ margin: '20px !important' }} content="A €1600 security deposit is paid directly to your accommodation provider. In the event you move out earlier than expected or there are damages during your stay, the accommodation provider may keep a portion or all of the deposit."
                {...detailstyle}/>
            </Col>
          </Row>
          <Row gutter={[24, 24]}>
            <Col span={8}>
              <Heading content="Rules"{...titleStyle}/>
            </Col>
            <Col span={16}>
              <Text style={{ margin: '20px !important' }} content="Respect of the apartment and the neighbors. No noises or parties between 8pm - 8am"
              {...detailstyle}/>
            </Col>
          </Row>
          <Row gutter={[24, 24]}>
            <Col span={8}>
              <Heading content="Cancellation Policy"{...titleStyle}/>
            </Col>
            <Col span={16}>
              <Text style={{ margin: '20px !important' }} content="Moderate:  If a user cancels up to 60 days before move in date, there is a 50% refund for the payment on the first month rent payment. If the user cancels up to 30 days before move in date there is a 25% refund for the payment on the first month rent payment. If the user cancels under 30 days before move in date, there is no refund available for the payment on the first month rent payment."
              {...detailstyle}/>
            </Col>
          </Row>
          <Row gutter={[24, 24]}>
            <Col span={8}>
              <Heading content="Contract Type"{...titleStyle}/>
            </Col>
            <Col span={16}>
              <Text style={{ margin: '20px !important' }} content="Pro-rated: Rent is calculated in proportion to the number of days of your stay. You will pay the monthly rent for each whole month that you book, but the first and last month you will simply pay for the days that you stay (like a hotel)"
              {...detailstyle}/>
            </Col>
          </Row>
        </AccommodationPolicieswrapper>
      </AccommodationPoliciesArea>
    </Element>
  );
};

AccommodationPolicies.propTypes = {
  titleStyle: PropTypes.object,
  titleStyleAP: PropTypes.object,
  detailstyle: PropTypes.object,
};

AccommodationPolicies.defaultProps = {

  titleStyleAP: {
    color: '#2C2C2C',
    marginBottom: '12px',
    fontSize: ['17px', '20px', '25px'],
    lineHeight: ['1.15', '1.2', '1.36'],
    mb: '4px',
  },
      
  detailstyle: {
    fontSize: '16px',
    textAlign: 'left',
    color: '#232323',
    position: 'absolute', 
    borderLeft: '#888 solid 1px',
    paddingLeft: '20px',
  },

  titleStyle: {
    marginTop: '12px',
    fontSize: '20px',
    color: '#767676',
    fontWeight: '500',
  },
 
  contentStyle: {
    fontSize: '15px',
    fontWeight: '400',
    color: '#2C2C2C',
    lineHeight: '1.6',
    mb: ['14px', '20px', '27px'],
  },

};

export default AccommodationPolicies;