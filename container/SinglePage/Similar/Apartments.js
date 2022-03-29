import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import ProductCard from "components/ProductCard/ProductCard";
import ScrollContainer from "react-indiana-drag-scroll";

const Apartments = (props) => {
  const { apartment } = useSelector((state) => state.apartment);
  
  return (
    <ScrollContainer className="scroll-container">
      {apartment && apartment.similar_apartments.length > 0 && (
        <Row gutter={20} style={{ width: '1500px' }} >
          {apartment.similar_apartments.map((apar) => {
            return (
              <Col span={6}>
                <ProductCard {...apar} />
              </Col>
            );
          })}
        </Row>
      )}
              </ScrollContainer>
  );
};

export default Apartments;
