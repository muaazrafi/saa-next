import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';
import {Row,Col,Divider} from 'antd';
import {  useSelector } from "react-redux";
import AccommodationPoliciesArea, { AccommodationPolicieswrapper } from './AccommodationPolicies.style';
import { Element } from 'react-scroll';


const AccommodationPolicies = ({
  titleStyle,
  titleStyleAP,
  detailstyle,
}) => {
  const { apartment, loading } = useSelector((state) => state.apartment);
  
  return (
    <Element name="accommodationpolicies">
      <AccommodationPoliciesArea>
        <Heading as="h2" content="Accommodation Policies" {...titleStyleAP} />
        <AccommodationPolicieswrapper>
          
          <Row gutter={[24, 24]}>
            {apartment && 
              <>
                <Col span={8}> <Heading content="Rent & Bills"{...titleStyle }/></Col>     
                <Col span = {16}>
                  <Text  style = {{ margin: '20px !important' }} content= {apartment.term_and_cond}{...detailstyle}/>
                </Col>
              </>
            }
          </Row>
          <Row gutter={[24, 24]}>
            {apartment && 
              <>
                <Col span={8}> <Heading content="Security Deposit"{...titleStyle }/></Col>     
                <Col span = {16}>
                  <Text  style = {{ margin: '20px !important' }} content= {apartment.deposit_instructions}{...detailstyle}/>
                </Col>
              </>
            }
          </Row>
          <Row gutter={[24, 24]}>
            {apartment && 
              <>
                <Col span={8}> <Heading content="Rules"{...titleStyle }/></Col>     
                <Col span = {16}>
                  <Text  style = {{ margin: '20px !important' }} content= {apartment.rules}{...detailstyle}/>
                </Col>
              </>
            }
          </Row>
          <Row gutter={[24, 24]}>
            {apartment && 
              <>
                <Col span={8}> <Heading content="Cancellation Policy"{...titleStyle }/></Col>     
                <Col span = {16}>
                  <Text  style = {{ margin: '20px !important' }} content= {apartment.cancellation_policy}{...detailstyle}/>
                </Col>
              </>
            }
          </Row>
          <Row gutter={[24, 24]}>
            {apartment && 
              <>
                <Col span={8}> <Heading content="Contract Type"{...titleStyle }/></Col>     
                <Col span = {16}>
                  <Text  style = {{ margin: '20px !important' }} content= {apartment.contract_type}{...detailstyle}/>
                </Col>
              </>
            }
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