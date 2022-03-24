import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select, Row, Col } from "antd";
import { cloneDeep } from "lodash";
import { updateSearch } from "store/apartmentsSlice";
import NumberSelectorWrapper from "./Selector.style";
const { Option } = Select;

const NumberSelector = ({ title, modifier, icon, options=[], defaultValue }) => {
  const dispatcher = useDispatch();
  const { search } = useSelector((state) => state.apartments);

  const updateNumberInSearch = (value) => {
    let modifiedSearch = cloneDeep(search);
    modifiedSearch[modifier] = value;
    dispatcher(updateSearch(modifiedSearch));
  };

  return (
    <NumberSelectorWrapper>
      <Select
        showSearch
        style={{ width: "100%" }}
        dropdownStyle={{ zIndex: 2000 }}
        optionFilterProp="children"
        onChange={updateNumberInSearch}
        value={search[modifier]}
        placeholder={
          <Row style={{ padding: "5px" }}>
            <Col style={{ marginTop: "4px" }}>{icon}</Col>
            <Col>&nbsp; {title}</Col>
          </Row>
        }
      >
        {options.map((option) => {
          return (
            <Option value={option}>
              <Row style={{ padding: "5px" }}>
                <Col style={{ marginTop: "4px" }}>{icon}</Col>
                <Col>&nbsp; {option}</Col>
              </Row>
            </Option>
          );
        })}
      </Select>
    </NumberSelectorWrapper>
  );
};

export default NumberSelector;
