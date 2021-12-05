import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from "antd";
import { FaBed, FaBath } from "react-icons/fa";
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
} from './GridCard.style';

const GridCard = ({
  className,
  favorite,
  location,
  title,
  price,
  rating,
  editBtn,
  viewDetailsBtn,
  children,
}) => {
  let classes = viewDetailsBtn || editBtn ? `has_btn ${className}` : className;
  return (
    <GridCardWrapper className={`grid_card ${classes}`.trim()}>
      <ImageWrapper className="media_wrapper">{children}</ImageWrapper>
      <ContentWrapper className="content_wrapper">
        {location && <LocationArea>{location}</LocationArea>}
        {title && <TitleArea>{title}</TitleArea>}
        <MetaWrapper className="meta_wrapper">
          {price && <PriceArea className="price">{price}</PriceArea>}
          <Row>
            <Col span={2} style={{ paddingTop: '2px' }} ><FaBed size='18px' /></Col>
            <Col span={5}>4 Beds</Col>
            <Col span={2} style={{ paddingTop: '2px' }} ><FaBath size='16px' /></Col>
            <Col span={5}>4 Baths</Col>
            <Col span={6}></Col>  
          </Row>
          {/* {rating && <RatingArea className="rating">{rating}</RatingArea>} */}
          {viewDetailsBtn || editBtn ? (
            <ButtonGroup className="button_group">
              {viewDetailsBtn}
            </ButtonGroup>
          ) : null}
        </MetaWrapper>
      </ContentWrapper>

      {favorite && <FavoriteIcon>{favorite}</FavoriteIcon>}
    </GridCardWrapper>
  );
};

GridCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  price: PropTypes.string,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  location: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  editBtn: PropTypes.element,
  viewDetailsBtn: PropTypes.element,
};

export default GridCard;
