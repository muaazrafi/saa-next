import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { cloneDeep } from "lodash";
import { Select } from "antd";
import { NavbarSearchWrapper } from "./Header.style";
import { searching, updateSearch } from "store/apartmentsSlice";

const { Option } = Select;

const NavbarSearch = () => {
  const router = useRouter();
  const { search, loading } = useSelector(
    (state) => state.apartments
  );
  const dispatcher = useDispatch();

  useEffect( () => {
    let modifiedSearch = cloneDeep(search);
    modifiedSearch.property_city_matches = router.query.city;
    dispatcher(updateSearch(modifiedSearch));        
  },[])

  const changeCity = (value) => {
    let modifiedSearch = cloneDeep(search);
    modifiedSearch.property_city_matches = value;
    dispatcher(updateSearch(modifiedSearch));
    router
      .push(`/listings/${value}?q=${JSON.stringify(modifiedSearch)}`, undefined, {
        shallow: true,
      })
      .then(() => {
        dispatcher(searching());
      });
  };

  return (
    <NavbarSearchWrapper className="navbar_search">
      <Select
        showSearch
        style={{ paddingLeft: "10px", width: "150px" }}
        placeholder="City"
        optionFilterProp="children"
        onChange={changeCity}
        value={search.property_city_matches}
      >
        <Option value="barcelona">Barcelona</Option>
        <Option value="madrid">Madrid</Option>
      </Select>
    </NavbarSearchWrapper>
  );
};

export default NavbarSearch;
