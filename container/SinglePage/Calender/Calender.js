import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Heading from 'components/UI/Heading/Heading';
import {Row,Col,Divider,Calendar} from 'antd';
import { FaSquare } from 'react-icons/fa';
import CalenderWrapper from './Calender.style';
import { Element } from 'react-scroll';

const Calender = ({ calenderStyle }) => {
  return (
    <Element name="amenities" className="Amenities">
      <CalenderWrapper>
        <Heading as="h2" content="Availability"  />
      	<Calendar fullscreen={false} {...calenderStyle}/>
	  	    <Row >
	        	<Col span={24}>{<FaSquare style= {{color: '#d9534f'}} />} Red dates above are confirmed as occupied.</Col>
	        </Row>	
	        <Row>
	        	<Col span={24}>{<FaSquare style = {{color: '#e0d3d2'}}/>} White dates above are dates that the apartment is unoccupied.
				</Col>
	        </Row>
      </CalenderWrapper>

    </Element>
  );
};

Calender.propTypes = {
  calenderStyle: PropTypes.object,
};


export default Calender;
