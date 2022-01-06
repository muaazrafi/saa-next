import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "antd";
import { cloneDeep } from "lodash";
import { updateSearch } from 'store/apartmentsSlice';

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
      style={{ width: "100px" }}
      placeholder={title}
      optionFilterProp="children"
      onChange={updateNumberInSearch}
      placeholder={
        <>
          {icon}
          &nbsp; {title}
        </>
      }
    >
      <Option value="1">1</Option>
      <Option value="2">2</Option>
      <Option value="3">3</Option>
      <Option value="4">4</Option>
      <Option value="5">5</Option>
      <Option value="6">6</Option>
      <Option value="7">7</Option>
      <Option value="8">8</Option>
      <Option value="9">9</Option>
      <Option value="10">10</Option>
    </Select>
  );
};

export default NumberSelector;
