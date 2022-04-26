import React, { useState } from "react";
import PropTypes from "prop-types";
import renderHTML from "react-render-html";
import { Element } from "react-scroll";
import { useSelector } from "react-redux";
import Heading from "components/UI/Heading/Heading";
import Text from "components/UI/Text/Text";
import { Button } from "antd";
import DescriptionWrapper from "./Description.style";
import { TextButton, MaxHeightAnimation } from "../SinglePageView.style";

const Description = ({
  location,
  titleStyle,
  locationMetaStyle,
  contentStyle,
}) => {
  const { apartment, loading } = useSelector((state) => state.apartment);
  const [readMore, setReadMore] = useState(true);

  const collapseContainer = {
    maxHeight: "200px",
    overflow: "hidden",
    backgroundImage: "linear-gradient(to bottom, transparent, #e9e8e836)",
  };

  return (
    <Element name="overview" className="overview">
      <DescriptionWrapper>
        <Text content={location} {...locationMetaStyle} />
        <Heading
          as="h2"
          content={apartment && apartment.name}
          {...titleStyle}
        />
        <div style={readMore ? collapseContainer : {  }}>
          <Text
            content={apartment && renderHTML(apartment.apartment_description)}
            {...contentStyle}
          />
        </div>
        <TextButton onClick={() => setReadMore(!readMore)}>
          <Button>Read more about accommodation</Button>
        </TextButton>
      </DescriptionWrapper>
    </Element>
  );
};

Description.propTypes = {
  titleStyle: PropTypes.object,
  locationMetaStyle: PropTypes.object,
  contentStyle: PropTypes.object,
};

Description.defaultProps = {
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
  },
  contentStyle: {
    fontSize: "15px",
    fontWeight: "400",
    color: "#2C2C2C",
    lineHeight: "1.6",
  },
};

export default Description;
