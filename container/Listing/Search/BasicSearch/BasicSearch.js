import React, { Children } from "react";
import { Row, Col, Select } from "antd";
import { useSelector } from "react-redux";
import DatePickerRange from "components/UI/DatePicker/ReactDates";
import BasicSearchWrapper from "./BasicSearchWrapper.style";

const { Option } = Select;

const BasicSearch = ({ mapShowBtn }) => {
  return (
    <BasicSearchWrapper>
      <Row>
        <Col>
          <DatePickerRange
            startDateId="checkin-Id"
            endDateId="checkout-id"
            startDatePlaceholderText="Check In"
            endDatePlaceholderText="Check Out"
            numberOfMonths={1}
            small
          />
        </Col>
        <Col>
          <Select
            showSearch
            style={{ paddingLeft: "10px", width: "100px" }}
            placeholder="Guests"
            optionFilterProp="children"
          >
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
            <Option value="6">6</Option>
            <Option value="7">7</Option>
          </Select>
        </Col>
        <Col>{mapShowBtn}</Col>
      </Row>
    </BasicSearchWrapper>
  );
};
export default BasicSearch;
