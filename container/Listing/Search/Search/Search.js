import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { cloneDeep } from "lodash";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { Button, Input, Popover, Row, Col, Select, Slider, Switch } from "antd";
import { searching, updateSearch } from "store/apartmentsSlice";
import DatePickerRange from "components/UI/DatePicker/ReactDates";
import AdvanceSearchWrapper from "./Search.style";
import Amenties from "../Amenties/Amenties";
import Areas from "../Areas/Areas";
import Price from "../Price/Price";
const { Option } = Select;

const AdvanceSearch = ({ mapShowBtn }) => {
  const { search, loading, selectedAmenties } = useSelector( state => state.apartments );
  const dispatcher = useDispatch();

  const searchApartments = () => {
    dispatcher(searching());
  }

  const dateSelection = (startDate, endDate) => {
    let modifiedSearch = cloneDeep(search);
    modifiedSearch.startDate = startDate ? startDate.format('YYYY-MM-DD') : null;
    modifiedSearch.endDate = endDate ? endDate.format('YYYY-MM-DD') : null;
    dispatcher(updateSearch(modifiedSearch));
  }

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
            selectDates={dateSelection}
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
            <Button type={(selectedAmenties.length > 0) ? 'primary' : ''} >Amenties {(selectedAmenties.length > 0) ? `(${selectedAmenties.length})` : '' } </Button>
          </Popover>
        </Col>
        <Col>
          <Popover
            trigger="click"
            placement="bottomLeft"
            getPopupContainer={(trigger) => trigger.parentElement}
            content={
              <div style={{ width: "350px" }}>
                <Price />    
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
          <Button type="primary" style={{ width: "100px" }} onClick={searchApartments} disabled={loading} >
            <FaSearch />
          </Button>
        </Col>
      </Row>
    </AdvanceSearchWrapper>
  );
};

export default AdvanceSearch;
