import React, { useEffect } from "react";
import { Select, Slider } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { cloneDeep } from "lodash";
import { updateSearch } from 'store/apartmentsSlice';

const { Option } = Select;

const Price = (props) => {
  const dispatcher = useDispatch();
  const { loading, search, maxPrice } = useSelector((state) => state.apartments);

  useEffect(() => {
  }, [maxPrice])

  const updatePrice = (values) => {
    let modifiedSearch = cloneDeep(search);
    modifiedSearch.base_monthly_price_gteq = values[0];
    modifiedSearch.base_monthly_price_lteq = values[1];
    dispatcher(updateSearch(modifiedSearch));
  }

  const updatePriceSorting = (value) => {
    let modifiedSearch = cloneDeep(search);
    modifiedSearch.order = value;
    dispatcher(updateSearch(modifiedSearch));
  }

  return (
    <>
      <Select
        showSearch
        style={{ width: "100%", marginBottom: "5px" }}
        placeholder="Sort By"
        optionFilterProp="children"
        onChange={updatePriceSorting}
      >
        <Option value="asc">Price: low to high</Option>
        <Option value="desc">Price: high to low</Option>
      </Select>
      <Slider range defaultValue={[0, maxPrice]} max={maxPrice} onChange={updatePrice} />
    </>
  );
};


export default Price;