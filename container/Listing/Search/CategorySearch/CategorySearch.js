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
    <CategroySearchWrapper>
      <Popover
        trigger='click'
        placement="bottomLeft"
        content={
          <>
            <Search
              placeholder="Search Amenties"
              onChange={searchAmenties}
              style={{ width: "240px", marginBottom: "20px", display: 'flex' }}
            />
            <Checkbox.Group
              className="popoverCheckBox"
              options={processedAmenties}
            />
          </>
        }
      >
        <Button>Amenties</Button>
      </Popover>
      <ViewWithPopup
        // className={processedAmenties.length > 0 ? "activated" : ""}
        key={getAmenities.id}
        noView={true}
        view={<Button type="default">{getAmenities.name}</Button>}
        popup={
          <>
            <Space direction="vertical">
              <Search
                placeholder="Search Amenties"
                onChange={searchAmenties}
                style={{ width: "240px", marginBottom: "20px" }}
              />
            </Space>
            <Checkbox.Group
              style={{ height: "350px", overflow: "auto" }}
              options={processedAmenties}
            />
          </>
        }
      />
    </CategroySearchWrapper>
  );
};

export default CategorySearchNext;
