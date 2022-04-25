import React from "react";
import Link from 'next/link';
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import { FaBed, FaBath } from "react-icons/fa";
import { MdHomeWork } from 'react-icons/md';
import ApartmentCurrency from "container/SinglePage/ApartmentCurrency/ApartmentCurrency";
import GridCardWrapper, {
  ImageWrapper,
  FavoriteIcon,
  ContentWrapper,
  LocationArea,
  TitleArea,
  PriceArea,
  MetaWrapper,
} from "./GridCard.style";
import Favorite from "/container/Favorite/Favorite";

const GridCard = ({
  id,
  favorite,
  location,
  title,
  price,
  apart_type,
  number_of_beds,
  number_of_bathrooms,
  currency,
  link_path,
  isMap=false,
  children,
  isFavorite=true
}) => {
  return (
    <GridCardWrapper style={{ marginBottom: isMap ? '0px' : '30px' }} >
      <ImageWrapper className="media_wrapper">{children}</ImageWrapper>
      <Link href={link_path} as={link_path} prefetch={false}  >
        <ContentWrapper className="content_wrapper" style={{ cursor: 'pointer' }} >
          {location && <LocationArea>{location}</LocationArea>}
          {title && <TitleArea>{title}</TitleArea>}
          <MetaWrapper className="meta_wrapper">
            {price && <PriceArea className="price"><ApartmentCurrency currency={currency} />{price}</PriceArea>}
            <Row style={{ marginTop: '5px' }} >
              <Col style={{ paddingTop: "2px" }}>
                <FaBed size="18px" />
              </Col>
              <Col style={{ padding: '0px 6px' }} >{number_of_beds} Beds</Col>
              <Col style={{ paddingTop: "2px" }}>
                <FaBath size="16px" />
              </Col>
              <Col style={{ padding: '0px 6px' }} >{number_of_bathrooms} Baths</Col>
              {/* <Col style={{ paddingTop: "2px" }} >
                <MdHomeWork size="16px" />
              </Col>
              <Col style={{ padding: '0px 6px' }} >{apart_type}</Col> */}
            </Row>
          </MetaWrapper>
        </ContentWrapper>
      </Link>
      { isFavorite && <Favorite id={id} /> } 
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
