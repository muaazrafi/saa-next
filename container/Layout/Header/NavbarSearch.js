import React, { useContext } from "react";
import Router, { withRouter } from "next/router";
import { Select } from "antd";
import { NavbarSearchWrapper } from "./Header.style";

const { Option } = Select;

const NavbarSearch = () => {
  return (
    <NavbarSearchWrapper className="navbar_search">
      <Select
        showSearch
        style={{ paddingLeft: "10px", width: "150px" }}
        placeholder="City"
        optionFilterProp="children"
      >
        <Option value="barcelona">Barcelona</Option>
        <Option value="madrid">Madrid</Option>
      </Select>
    </NavbarSearchWrapper>
  );
};

export default withRouter(NavbarSearch);
