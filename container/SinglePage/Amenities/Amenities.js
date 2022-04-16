import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { capitalize } from "lodash";
import Heading from "components/UI/Heading/Heading";
import { Row, Col } from "antd";
import { FaBath, FaCheck } from "react-icons/fa";
import { MdMeetingRoom, MdHomeWork } from "react-icons/md";
import { IoBed } from "react-icons/io5";
import IconCard from "components/IconCard/IconCard";
import AmenitiesWrapper, {
  AmenitiesArea,
  AmenitiesAreaMore,
} from "./Amenities.style";
import { TextButton } from "../SinglePageView.style";
import { Element } from "react-scroll";

const Amenities = ({ titleStyle, linkStyle }) => {
  const { apartment, loading } = useSelector((state) => state.apartment);
  return (
    <Element name="amenities" className="Amenities">
      <AmenitiesWrapper>
        <Heading as="h2" content="Amenities" {...titleStyle} />
        {apartment && (
          <AmenitiesArea>
            <IconCard
              icon={<MdMeetingRoom />}
              title={`${apartment.number_of_bedrooms} Bedrooms`}
            />
            <IconCard
              icon={<IoBed />}
              title={`${apartment.number_of_beds} Bedrooms`}
            />
            <IconCard
              icon={<FaBath />}
              title={`${apartment.number_of_bathrooms} Bathrooms`}
            />
            <IconCard
              icon={<MdHomeWork />}
              title={capitalize(apartment.apart_type)}
            />
          </AmenitiesArea>
        )}

        <TextButton style={{ marginBottom: "10px" }}>
          <Link href="#1">
            <a style={{ ...linkStyle }}>All Amenities</a>
          </Link>
        </TextButton>
        <AmenitiesAreaMore>
          <Row gutter={[16, 16]} style={{ width: "100%" }}>
            {apartment &&
              apartment.amenities.map((amenitie) => (
                <Col lg={6} md={6} sm={8} xs={8}>
                  {<FaCheck />}
                  {amenitie}
                </Col>
              ))}
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
    color: "#2C2C2C",
    fontSize: ["17px", "20px", "25px"],
    lineHeight: ["1.15", "1.2", "1.36"],
    mb: ["14px", "20px", "30px"],
  },
  linkStyle: {
    fontSize: "15px",
    fontWeight: "700",
    color: "#0088E5",
  },
};

export default Amenities;
