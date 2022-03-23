import React, { useContext } from "react";
import { useRouter } from "next/router";
import { Select } from "antd";
import { NavbarSearchWrapper } from "./Header.style";

const { Option } = Select;

const NavbarSearch = () => {
  const router = useRouter();

  const changeCity = (value) => {

  }

  return (
    <NavbarSearchWrapper className="navbar_search">
      <Select
        showSearch
        style={{ paddingLeft: "10px", width: "150px" }}
        placeholder="City"
        optionFilterProp="children"
        onChange={changeCity}
      >
        <Option value="barcelona">Barcelona</Option>
        <Option value="madrid">Madrid</Option>
      </Select>
    </NavbarSearchWrapper>
  );
};

export default NavbarSearch;
