import React from "react";
import Link from 'next/link';
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import { FaBed, FaBath } from "react-icons/fa";
import GridCardWrapper, {
  ImageWrapper,
  FavoriteIcon,
  ContentWrapper,
  LocationArea,
  TitleArea,
  PriceArea,
  MetaWrapper,
} from "./GridCard.style";

const GridCard = ({
  favorite,
  location,
  title,
  price,
  link_path,
  children,
}) => {
  return (
    <GridCardWrapper>
      <ImageWrapper className="media_wrapper">{children}</ImageWrapper>
      <Link href={link_path} as={link_path} prefetch={false}  >
        <ContentWrapper className="content_wrapper" style={{ cursor: 'pointer' }} >
          {location && <LocationArea>{location}</LocationArea>}
          {title && <TitleArea>{title}</TitleArea>}
          <MetaWrapper className="meta_wrapper">
            {price && <PriceArea className="price">{price}</PriceArea>}
            <Row>
              <Col span={2} style={{ paddingTop: "2px" }}>
                <FaBed size="18px" />
              </Col>
              <Col span={5}>4 Beds</Col>
              <Col span={2} style={{ paddingTop: "2px" }}>
                <FaBath size="16px" />
              </Col>
              <Col span={5}>4 Baths</Col>
              <Col span={6}></Col>
            </Row>
          </MetaWrapper>
        </ContentWrapper>
      </Link>

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
