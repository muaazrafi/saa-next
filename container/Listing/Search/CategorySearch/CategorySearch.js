import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { capitalize, filter, sortBy } from "lodash";
import ViewWithPopup from "components/UI/ViewWithPopup/ViewWithPopup";
import { Button, Checkbox, Input, Space, Popover } from "antd";
import { getAmenities, getPropertyType } from "../SearchParams";
import CategroySearchWrapper from "./CategorySearch.style";

const { Search } = Input;

const CategorySearchNext = (props) => {
  
  const { amenties } = useSelector((state) => state.apartments);
  
  const [processedAmenties, setProcessedAmenties] = useState([]);
  
  const Property_type =['Aparments','Rooms','Halls','Beds']  

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

  const search_propertype = (e) => {
    return Property_type
  }

  return (
    <CategroySearchWrapper>
      <Popover
        trigger='click'
        placement="bottomLeft"
        content={
          <>
            <Search
              placeholder = "Search Amenties"
              onChange = {searchAmenties}
              style = {{ width: "240px", marginBottom: "20px", display: 'flex' }}
            />
            <Checkbox.Group
              className = "popoverCheckBox"
              options = {processedAmenties}
            />
          </>
        }
      >
        <Button>Amenties</Button>
      </Popover>

      <Popover
        trigger='click'
        placement="bottomLeft"
        content={
          <>
            <Checkbox.Group
              className = "popoverCheckBox"
              style = {{ width: "240px",height: "150px" }}
              options = { Property_type }
            />
          </>
        }
      >
        <Button>Property</Button>
      </Popover>
     
    </CategroySearchWrapper>
  );
};

export default CategorySearchNext;
