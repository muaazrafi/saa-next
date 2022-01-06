import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Heading from 'components/UI/Heading/Heading';
import {Row,Col, List, Card,Calendar} from 'antd';
import { FaSquare } from 'react-icons/fa';
import SmiliarApartmentWrapper from './SimilarApartments.style';
import { fetchApartments } from "store/services/apartment";
import { Element } from 'react-scroll';


const SimilarApartments = ({}) => {
  const { apartments, loading } = useSelector((state) => state.apartments);

  
  const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
]

  return (
    <Element name="calendar">
      <SmiliarApartmentWrapper>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>Card content</Card>
            </List.Item>
          )}
        />
      </SmiliarApartmentWrapper>

    </Element>
  );
};



export default SimilarApartments;