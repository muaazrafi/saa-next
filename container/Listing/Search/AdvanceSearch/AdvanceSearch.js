import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { capitalize, filter, sortBy } from "lodash";
import PerfectScrollbar from "react-perfect-scrollbar";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { GoSettings } from "react-icons/go";

import {
  Button,
  Checkbox,
  Input,
  Popover,
  Row,
  Col,
  Select,
  Slider,
  Switch,
} from "antd";
import AdvanceSearchWrapper from "./AdvanceSearch.style";

const { Search } = Input;
const { Option } = Select;

const AdvanceSearch = (props) => {
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
    <AdvanceSearchWrapper>
      <Row>
        <Col>
          <Popover
            trigger="click"
            placement="bottomLeft"
            getPopupContainer={(trigger) => trigger.parentElement}
            content={
              <>
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
                  <Checkbox.Group
                    className="popoverCheckBox"
                    options={processedAmenties}
                  />
                </PerfectScrollbar>
              </>
            }
          >
            <Button>Amenties</Button>
          </Popover>
          <Popover
            trigger="click"
            placement="bottomLeft"
            getPopupContainer={(trigger) => trigger.parentElement}
            content={
              <div style={{ width: "350px" }}>
                <Select
                  showSearch
                  style={{ width: "100%", marginBottom: "5px" }}
                  placeholder="Sort By"
                  optionFilterProp="children"
                >
                  <Option value="barcelona">Price: low to high</Option>
                  <Option value="madrid">Price: high to low</Option>
                </Select>
                <Slider range defaultValue={[0, 2000]} max={2000} />
              </div>
            }
          >
            <Button style={{ marginLeft: "10px" }}>Price</Button>
          </Popover>
          <Button style={{ marginLeft: "10px" }}>
              <GoSettings />
            </Button>
        </Col>
        <Col style={{ marginLeft: '10px' }} >
          <Button>
            <MdClear />
          </Button>
        </Col>
        <Col style={{ marginLeft: '10px' }} >
          <Button type="primary" style={{ width: '60px' }} >
            <FaSearch />
          </Button>
        </Col>
      </Row>
    </AdvanceSearchWrapper>
  );
};

export default AdvanceSearch;
