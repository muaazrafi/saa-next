import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { capitalize, filter, sortBy } from "lodash";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Input, Checkbox } from "antd";
import AreasWrapper from "./Areas.style";

const { Search } = Input;

const Areas = (props) => {
  const { areas, loading } = useSelector((state) => state.apartments);
  const [processedAreas, setProcessedAreas] = useState([]);

  useEffect(() => {
    if (areas.length > 0) {
      setProcessedAreas(getDefaultAreas());
    }
  }, [areas]);

  const getDefaultAreas = () => {
    let rawAreas = areas.map((area) => {
      return {
        label: `${area.area} (${
          area.count
        })`,
        value: area,
      };
    });
    return sortBy(rawAreas, (area) => {
      return area.label;
    });
  };

  const searchAreas = (e) => {
    const actualAreas = getDefaultAreas();
    const searchValue = e.target.value;
    if (searchValue !== "") {
      const filteredAreas = filter(actualAreas, (area) => {
        return area.label.toLowerCase().includes(searchValue.toLowerCase());
      });
      setProcessedAreas(filteredAreas);
    } else {
      setProcessedAreas(actualAreas);
    }
  };

  return (
    <AreasWrapper>
      <Search
        placeholder="Search Areas"
        onChange={searchAreas}
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
            options={processedAreas}
          />
        )}
      </PerfectScrollbar>
    </AreasWrapper>
  );
};

export default Areas;
