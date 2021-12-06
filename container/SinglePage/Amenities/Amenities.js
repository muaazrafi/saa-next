import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Heading from 'components/UI/Heading/Heading';
import {Row,Col,Divider} from 'antd';
import { FaWifi, FaCarAlt, FaSwimmer, FaAirFreshener,FaCheck } from 'react-icons/fa';
import IconCard from 'components/IconCard/IconCard';
import AmenitiesWrapper, { AmenitiesArea,AmenitiesAreaMore } from './Amenities.style';
import { TextButton } from '../SinglePageView.style';
import { Element } from 'react-scroll';

const Amenities = ({ titleStyle, linkStyle }) => {
  return (
    <Element name="amenities" className="Amenities">
      <AmenitiesWrapper>
        <Heading as="h2" content="Amenities" {...titleStyle} />
        <AmenitiesArea>
          <IconCard icon={<FaWifi />} title="Free wifi" />
          <IconCard icon={<FaCarAlt />} title="Free parking" />
          <IconCard icon={<FaSwimmer />} title="Free pool" />
          <IconCard icon={<FaAirFreshener />} title="Air Freshener" />
        </AmenitiesArea>
        <TextButton style={{marginBottom: '10px'}}>
          <Link href="#1">
            <a style={{ ...linkStyle }}>All Amenities</a>
          </Link>
        </TextButton>  
        <AmenitiesAreaMore>
          <Row gutter={[24, 24]}>
            <Col span={8}>{< FaCheck />}   Air conditioning</Col>
            <Col span={8}>{< FaCheck />} Balcony</Col>
            <Col span={8}>{< FaCheck />} Bed linens</Col>
            <Col span={8}>{< FaCheck />} Carbon monoxide detector</Col>
            <Col span={8}>{< FaCheck />} Chairs</Col>
            <Col span={8}>{< FaCheck />} Closet</Col>
            <Col span={8}>{< FaCheck />}   Air conditioning</Col>
            <Col span={8}>{< FaCheck />} Balcony</Col>
            <Col span={8}>{< FaCheck />} Bed linens</Col>
            <Col span={8}>{< FaCheck />} Carbon monoxide detector</Col>
            <Col span={8}>{< FaCheck />} Chairs</Col>
            <Col span={8}>{< FaCheck />} Closet</Col>
            <Col span={8}>{< FaCheck />}   Air conditioning</Col>
            <Col span={8}>{< FaCheck />} Balcony</Col>
            <Col span={8}>{< FaCheck />} Bed linens</Col>
            <Col span={8}>{< FaCheck />} Carbon monoxide detector</Col>
            <Col span={8}>{< FaCheck />} Chairs</Col>
            <Col span={8}>{< FaCheck />} Closet</Col>
          </Row>
        </AmenitiesAreaMore>
      </AmenitiesWrapper>
    </Element>
  );
};

Amenities.propTypes = {
  titleStyle: PropTypes.object,
  linkStyle: PropTypes.object,
};

Amenities.defaultProps = {
  titleStyle: {
    color: '#2C2C2C',
    fontSize: ['17px', '20px', '25px'],
    lineHeight: ['1.15', '1.2', '1.36'],
    mb: ['14px', '20px', '30px'],
  },
  linkStyle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#0088E5',
  },
};

export default Amenities;
