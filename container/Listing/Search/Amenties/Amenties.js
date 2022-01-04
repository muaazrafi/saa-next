import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { capitalize, filter, sortBy, cloneDeep } from "lodash";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Input, Select, Checkbox } from "antd";
import AmentiesWrapper from "./Amenties.style";
import { updateSearch, selectAmenties } from 'store/apartmentsSlice';
const { Search } = Input;
const { Option } = Select;

const Amenties = (props) => {
  const dispatcher = useDispatch();
  const { amenties, loading, search, selectedAmenties } = useSelector((state) => state.apartments);
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

  const storeSearchAmenties = (amenties) => {
    let modifiedSearch = cloneDeep(search);
    if (event.target.checked) {
      amenties.map( (amenty) => {
        modifiedSearch[`${amenty}_eq`] = true;
        return false;
      });
    } else {
      delete modifiedSearch[`${event.target.value}_eq`];
    }
    dispatcher(selectAmenties(amenties));
    dispatcher(updateSearch(modifiedSearch));
  }

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
            onChange={storeSearchAmenties}
            defaultValue={selectedAmenties}
          />
        )}
      </PerfectScrollbar>
    </AmentiesWrapper>
  );
};

export default Amenties;
