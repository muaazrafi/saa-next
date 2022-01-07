import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import { cloneDeep, range } from "lodash";
import { FaSearch, FaBed } from "react-icons/fa";
import { MdClear, MdMeetingRoom, MdHomeWork } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";
import { Button, Input, Popover, Row, Col, Select } from "antd";
import { searching, updateSearch } from "store/apartmentsSlice";
import DatePickerRange from "components/UI/DatePicker/ReactDates";
import AdvanceSearchWrapper from "./Search.style";
import Amenties from "../Amenties/Amenties";
import Areas from "../Areas/Areas";
import Price from "../Price/Price";
import Selector from "../Selector/Selector";
import MoreFilters from '../MoreFilters/MoreFilters';
const { Option } = Select;

const AdvanceSearch = ({ mapShowBtn }) => {
  const { search, loading, selectedAmenties } = useSelector(
    (state) => state.apartments
  );
  const dispatcher = useDispatch();
  const router = useRouter();
  const searchApartments = () => {
    router.push(`/listings/${search.property_city_matches}?q=${JSON.stringify(search)}`, undefined, { shallow: true }).then( () =>{
      dispatcher(searching());
    });
  };

  const dateSelection = (startDate, endDate) => {
    let modifiedSearch = cloneDeep(search);
    modifiedSearch.startDate = startDate
      ? startDate.format("YYYY-MM-DD")
      : null;
    modifiedSearch.endDate = endDate ? endDate.format("YYYY-MM-DD") : null;
    dispatcher(updateSearch(modifiedSearch));
  };

  return (
    <AdvanceSearchWrapper>
      <Row gutter={10} style={{ width: "100%" }}>
        <Col xl={2} lg={3} md={5} xs={0} sm={0} style={{ marginBottom: "10px" }}>
          <Selector
            title="Type"
            modifier="apart_type_eq"
            icon={<MdHomeWork size={18} />}
            options={['apartment','room']}
          />
        </Col>
        <Col xxl={4} xl={5} lg={6} md={8} xs={20} sm={22} style={{ marginBottom: "10px" }}>
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
        <Col style={{textAlign: 'center', marginTop: '5px'}} md={0} xs={4} sm={2}>
          {mapShowBtn}
        </Col>
        <Col xl={3} lg={4} md={4} xs={0} sm={0}>
          <Selector
            title="Beds"
            modifier="number_of_beds_gteq"
            icon={<FaBed size={18} />}
            options={range(1, 11)}
          />
        </Col>
        <Col xl={3} lg={4} md={5} xs={0} sm={0}>
          <Selector
            title="Bedrooms"
            modifier="number_of_bedrooms_eq"
            icon={<MdMeetingRoom size={18} />}
            options={range(1, 11)}
          />
        </Col>
        <Col xl={3} lg={4} md={4} xs={0} sm={0}>
          <Selector
            title="Baths"
            modifier="number_of_bathrooms_gteq"
            icon={<GiBathtub size={18} />}
            options={range(1, 11)}
          />
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
            <Button size="large">Price</Button>
          </Popover>
        </Col>
        <Col className="hide-on-sm" >
          <Popover
            trigger="click"
            placement="bottomLeft"
            getPopupContainer={(trigger) => trigger.parentElement}
            content={<Amenties />}
          >
            <Button
              size="large"
              type={selectedAmenties.length > 0 ? "primary" : ""}
            >
              Amenties{" "}
              {selectedAmenties.length > 0
                ? `(${selectedAmenties.length})`
                : ""}{" "}
            </Button>
          </Popover>
        </Col>
        <Col className="hide-on-sm" >
          <Popover
            trigger="click"
            placement="bottomLeft"
            getPopupContainer={(trigger) => trigger.parentElement}
            content={<Areas />}
          >
            <Button size="large">Neighborhood</Button>
          </Popover>
        </Col>
        <Col md={0}>
          <MoreFilters />
        </Col>
        <Col>
          <Button size="large" >
            <MdClear />
          </Button>
        </Col>
        <Col lg={2} md={4} sm={6} xs={6} >
          <Button
            type="primary"
            style={{ width: "100%" }}
            onClick={searchApartments}
            loading={loading}
            size="large"
          >
            <FaSearch />
          </Button>
        </Col>
        <Col style={{textAlign: 'right', marginTop: '5px'}} md={1} xs={0} sm={0}>
          {mapShowBtn}
        </Col>
      </Row>
    </AdvanceSearchWrapper>
  );
};

export default AdvanceSearch;
