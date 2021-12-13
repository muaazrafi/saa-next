import React from "react";
import { Row, Col } from "antd";
import Container from 'components/UI/Container/Container';
import ImageGridWrapper from "./ImageGrid.style";

const images = [
  "/images/post-image-1.jpg",
  "/images/post-thumb-2.jpg",
  "/images/post-image-1.jpg",
  "/images/post-image-2.jpg",
  "/images/post-image-1.jpg",
];

const ImageGrid = ({ images, viewMore }) => {
  const trio = (
    <Row gutter={[10, 10]} >
      <Col xs={24} sm={24} md={12} >
        <img className='image-grid-first' src={images[0].img} />
      </Col>
      <Col xs={0} sm={0} md={6} >
        <img className='image-grid-second' src={images[1].img} />
        <img className='image-grid-third' src={images[2].img} />
      </Col>
      <Col xs={0} sm={0} md={6} >
        <img className='image-grid-second' src={images[3].img} />
        <img className='image-grid-third' src={images[4].img} />
      </Col>      
    </Row>
  );

  return (
    <Container>
      <ImageGridWrapper>
        { trio}
        {viewMore}
      </ImageGridWrapper>
    </Container>
  );
};

export default ImageGrid;
