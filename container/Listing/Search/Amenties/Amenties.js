import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { capitalize, filter, sortBy } from "lodash";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Input, Select, Checkbox } from "antd";
import AmentiesWrapper from "./Amenties.style";

const { Search } = Input;
const { Option } = Select;

const Amenties = (props) => {
  const { amenties, loading } = useSelector((state) => state.apartments);
  const [processedAmenties, setProcessedAmenties] = useState([]);

  useEffect(() => {
    if (amenties.length > 0) {
      setProcessedAmenties(getDefaultAmenties());
    }
  }, [amenties]);

  const getDefaultAmenties = () => {
    let rawAmenties = Object.keys(amenties[0]).map((amenty) => {
      return {
        label: `${capitalize(amenty.replace("_", " "))} (${
          amenties[0][amenty]
        })`,
        value: amenty,
      };
    });
    return sortBy(rawAmenties, (amenty) => {
      return amenty.label;
    });
  };

  const searchAmenties = (e) => {
    const actualAmenties = getDefaultAmenties();
    const searchValue = e.target.value;
    if (searchValue !== "") {
      const filteredAmenties = filter(actualAmenties, (amenty) => {
        return amenty.label.toLowerCase().includes(searchValue.toLowerCase());
      });
      setProcessedAmenties(filteredAmenties);
    } else {
      setProcessedAmenties(actualAmenties);
    }
  };

  return (
    <AmentiesWrapper>
      <Search
        placeholder="Search Amenties"
        onChange={searchAmenties}
        style={{
          width: "240px",
          marginBottom: "20px",
          display: "flex",
        }}
      />
      <PerfectScrollbar style={{ height: "350px" }}>
        {loading ? (
          "loading..."
        ) : (
          <Checkbox.Group
            className="popoverCheckBox"
            options={processedAmenties}
          />
        )}
      </PerfectScrollbar>
    </AmentiesWrapper>
  );
};

export default Amenties;
