import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select, Row, Col } from "antd";
import { cloneDeep, range } from "lodash";
import { updateSearch } from "store/apartmentsSlice";
const { Option } = Select;

const NumberSelector = ({ title, modifier, icon }) => {
  const dispatcher = useDispatch();
  const { search } = useSelector((state) => state.apartments);

  const updateNumberInSearch = (value) => {
    let modifiedSearch = cloneDeep(search);
    modifiedSearch[modifier] = value;
    dispatcher(updateSearch(modifiedSearch));
  };

  return (
    <Select
      showSearch
      style={{ width: "100%" }}
      placeholder={title}
      optionFilterProp="children"
      onChange={updateNumberInSearch}
      placeholder={
        <Row>
          <Col style={{ marginTop: "4px" }}>{icon}</Col>
          <Col>&nbsp; {title}</Col>
        </Row>
      }
    >
      {range(1, 10).map((number) => {
        return (
          <Option value={number}>
            <Row>
              <Col style={{ marginTop: "4px" }}>{icon}</Col>
              <Col>&nbsp; {number}</Col>
            </Row>
          </Option>
        );
      })}
    </Select>
  );
};

export default NumberSelector;
