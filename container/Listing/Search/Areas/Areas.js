import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filter, sortBy, cloneDeep, uniqBy } from "lodash";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Input, Checkbox } from "antd";
import AreasWrapper from "./Areas.style";
import { updateSearch } from 'store/apartmentsSlice';

const { Search } = Input;

const Areas = (props) => {
  const dispatcher = useDispatch();
  const { areas, loading, search } = useSelector((state) => state.apartments);
  const [processedAreas, setProcessedAreas] = useState([]);

  useEffect(() => {
    setProcessedAreas(getDefaultAreas());
  }, [areas]);

  const getDefaultAreas = () => {
    let rawAreas = areas.map((area) => {
      return {
        label: `${area.area} (${
          area.count
        })`,
        value: area.area,
      };
    });
    rawAreas = uniqBy(processedAreas, (area) => { return area.value } );
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

  const storeSearchAreas = (areas) => {
    let modifiedSearch = cloneDeep(search);
    modifiedSearch.property_area_in = areas;
    dispatcher(updateSearch(modifiedSearch));
  }

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
            onChange={storeSearchAreas}
            value={search.property_area_in}
          />
        )}
      </PerfectScrollbar>
    </AreasWrapper>
  );
};

export default Areas;
