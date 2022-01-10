import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col} from "antd";
import Box from 'components/UI/Box/Box';
import { FaBed, FaBath } from "react-icons/fa";
import Carousel from 'react-multi-carousel';
import GridCardWrapper, {
  ImageWrapper,
  FavoriteIcon,
  ContentWrapper,
  LocationArea,
  TitleArea,
  PriceArea,
  RatingArea,
  MetaWrapper,
  ButtonGroup,
} from '../GridCard/GridCard.style';
import ListingWrapper, {
  PostsWrapper,
  ShowMapCheckbox,
} from "container/Listing/Listing.style";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
    paritialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    paritialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};



const SimilarApartment = ({apartment,rowStyle,columnStyle,}) => {
  return (
  <PostsWrapper>
    <Box className="grid_wrapper" {...columnStyle}>
      <GridCardWrapper >
        <Carousel
             ssr
        additionalTransfrom = {0}
        arrows
        autoPlaySpeed = {3000}
        containerClass = "container"
        dotListClass = ""
        draggable
        focusOnSelect = {false}
        infinite
        itemClass = " "
        renderDotsOutside={false}
        responsive={responsive}
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        >
            {apartment && apartment.image_public_ids.map((image) => (
              <img src = {image.img}  />
            ))}
        </Carousel>
        <ContentWrapper className="content_wrapper">  
          <LocationArea>{apartment && apartment.name}</LocationArea>
          
          <TitleArea>{apartment && apartment.area}</TitleArea>
          
          <MetaWrapper className="meta_wrapper">
            <PriceArea className="price"> ${apartment && apartment.display_price }/Montly </PriceArea>
            <Row>
              <Col span= {2} style={{ paddingTop: '2px' }} ><FaBed size='18px' /></Col>
              <Col span= {5} >4 Beds</Col>
              <Col span= {2} style={{ paddingTop: '2px' }} ><FaBath size='16px' /></Col>
              <Col span= {5} >4 Baths</Col>
              <Col span= {6} ></Col>  
            </Row>
          </MetaWrapper>
        </ContentWrapper>
      </GridCardWrapper>
    </Box>
  </PostsWrapper>
  );
};

SimilarApartment.propTypes = {
  rowStyle: PropTypes.object,
  columnStyle: PropTypes.object,
};

SimilarApartment.defaultProps = {
  rowStyle: {
    flexBox: true,
    flexWrap: 'wrap',
    mr: ['-10px', '-10px', '-10px', '-10px', '-10px', '-15px'],
    ml: ['-10px', '-10px', '-10px', '-10px', '-10px', '-15px'],
  },
  columnStyle: {
    pr: ['10px', '10px', '10px', '10px', '10px', '15px'],
    pl: ['10px', '10px', '10px', '10px', '10px', '15px'],
  },
  
};


export default SimilarApartment;