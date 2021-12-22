import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Heading from 'components/UI/Heading/Heading';
import {Row,Col, Calendar} from 'antd';
import { FaSquare } from 'react-icons/fa';
import CalenderWrapper from './Calender.style';
import { Element } from 'react-scroll';

const Calender = ({ calenderStyle }) => {
  const { apartment } = useSelector( (state) => state.apartment);

  useEffect( () => {
  }, [apartment]);

  const disabledDate = (current) => {
    if (current && current.valueOf() < Date.now()) {
      return true;
    }
    if ( apartment && apartment.occupied_dates ) {
      return apartment.occupied_dates.includes(current.format("YYYY/MM/DD"));
    }
    // Implement check in windows logic here
  }


  return (
    <Element name="calendar">
      <CalenderWrapper>
        <Heading as="h2" content="Availability"  />
      	<Calendar disabledDate={disabledDate} fullscreen={false} {...calenderStyle} />
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
