import React from "react";
import PropTypes from "prop-types";
import Heading from "components/UI/Heading/Heading";
import { useSelector } from "react-redux";
import LocationWrapper from "./Location.style";
import Map from "components/Map/Map";
import { Element } from "react-scroll";

const Location = ({ titleStyle }) => {
  const { apartment } = useSelector((state) => state.apartment);
  return (
    <Element name="location" className="location">
      <LocationWrapper>
        <Heading as="h2" content="Location" {...titleStyle} />
        {apartment && <Map location={apartment} multiple={false} />}
      </LocationWrapper>
    </Element>
  );
};

Location.propTypes = {
  titleStyle: PropTypes.object,
  locationMetaStyle: PropTypes.object,
  contentStyle: PropTypes.object,
};

Location.defaultProps = {
  titleStyle: {
    color: "#2C2C2C",
    fontSize: ["17px", "20px", "25px"],
    lineHeight: ["1.15", "1.2", "1.36"],
    mb: "4px",
  },
  locationMetaStyle: {
    fontSize: "13px",
    fontWeight: "400",
    color: "#909090",
    mb: ["14px", "20px", "27px"],
  },
  contentStyle: {
    fontSize: "15px",
    fontWeight: "400",
    color: "#2C2C2C",
    lineHeight: "1.6",
    mb: ["14px", "20px", "27px"],
  },
  boldContentStyle: {
    fontWeight: "700",
    mb: "0!important",
  },
  linkStyle: {
    fontSize: "15px",
    fontWeight: "700",
    color: "#0088E5",
  },
};

export default Location;
