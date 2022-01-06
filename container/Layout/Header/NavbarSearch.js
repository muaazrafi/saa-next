import React, { useState, useContext,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Router, { withRouter } from "next/router";
import { filter, sortBy, cloneDeep } from "lodash";
import { Select } from "antd";
import { NavbarSearchWrapper } from "./Header.style";
import { updateSearch,searching } from 'store/apartmentsSlice';

const { Option } = Select;


const NavbarSearch = () => {
  
  const dispatcher = useDispatch();
  const { loading, search } = useSelector((state) => state.apartments);
  
  
  const storeSearchcity = (value) => {
    let modifiedSearch = cloneDeep(search);
    modifiedSearch.property_city_matches = value
    dispatcher(updateSearch(modifiedSearch));
    searchApartments();  
  }

  const searchApartments = () => {
    dispatcher(searching());
  }
        
  return (
    <NavbarSearchWrapper className="navbar_search">
      <Select
        showSearch
        style = { { paddingLeft: "10px", width: "150px" } }
        onChange={storeSearchcity}
        placeholder = "City"
        optionFilterProp = "children"
      >
        <Option value="barcelona" > Barcelona </Option>
        <Option value="madrid" > Madrid </Option>
        <Option value="lahore" > Lahore </Option>
      </Select>
    </NavbarSearchWrapper>
  );
};

export default withRouter(NavbarSearch);
