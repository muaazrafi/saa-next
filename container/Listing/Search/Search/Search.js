import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { Button, Input, Popover, Row, Col, Select, Slider, Switch } from "antd";
import DatePickerRange from "components/UI/DatePicker/ReactDates";
import AdvanceSearchWrapper from "./Search.style";
import Amenties from "../Amenties/Amenties";
import Areas from "../Areas/Areas";
const { Option } = Select;

const AdvanceSearch = ({ mapShowBtn }) => {
  return (
    <AdvanceSearchWrapper>
      <Row>
        <Col style={{ marginBottom: "10px" }}>
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
            style={{ width: "100px" }}
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
        <Col>
          <Popover
            trigger="click"
            placement="bottomLeft"
            getPopupContainer={(trigger) => trigger.parentElement}
            content={<Amenties />}
          >
            <Button>Amenties</Button>
          </Popover>
        </Col>
        <Col>
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
            <Button>Price</Button>
          </Popover>
        </Col>
        <Col>
          <Popover
            trigger="click"
            placement="bottomLeft"
            getPopupContainer={(trigger) => trigger.parentElement}
            content={<Areas />}
          >
            <Button>Neighborhood</Button>
          </Popover>
        </Col>
        <Col>
          {" "}
          <Button>More Filters</Button>
        </Col>
        <Col>
          <Button>
            <MdClear />
          </Button>
        </Col>
        <Col>
          <Button type="primary" style={{ width: "100px" }}>
            <FaSearch />
          </Button>
        </Col>
      </Row>
    </AdvanceSearchWrapper>
  );
};

export default AdvanceSearch;
