import React from "react";
import NoSSR from "react-no-ssr";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { cloneDeep, range } from "lodash";
import { useRouter } from "next/router";
import { Row, Col, Select, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { searching, updateSearch } from "store/apartmentsSlice";
import DatePickerRange from "components/UI/DatePicker/ReactDates";

const { Option } = Select;

const HomeSearch = () => {
  const dispatch = useDispatch();
  const { search, loading } = useSelector((state) => state.apartments);
  const router = useRouter();

  const dateSelection = (startDate, endDate) => {
    let modifiedSearch = cloneDeep(search);
    modifiedSearch.startDate = startDate
      ? startDate.format("YYYY-MM-DD")
      : null;
    modifiedSearch.endDate = endDate ? endDate.format("YYYY-MM-DD") : null;
    dispatch(updateSearch(modifiedSearch));
  };

  const changeCity = (value) => {
    let modifiedSearch = cloneDeep(search);
    modifiedSearch.property_city_matches = value;
    dispatch(updateSearch(modifiedSearch));
  };

  const changeGuests = (value) => {
    let modifiedSearch = cloneDeep(search);
    modifiedSearch.number_of_max_occupants_gteq = value;
    dispatch(updateSearch(modifiedSearch));
  };

  const searchApartments = () => {
    router.push(`/listings/${search.property_city_matches}?q=${JSON.stringify(search)}`, undefined, { shallow: true });
  };

  return (
    <section className="booking_section">
      <div className="container">
        <Row gutter={[20, 20]}>
          <Col xs={24} xl={9}>
            <Select
              showSearch
              style={{ paddingLeft: "10px", width: "100%" }}
              placeholder="Where do you want to go?"
              optionFilterProp="children"
              onChange={changeCity}
            >
              <Option value="barcelona">Barcelona</Option>
              <Option value="madrid">Madrid</Option>
            </Select>
          </Col>
          <Col xs={12} xl={8}>
            <NoSSR>
              <DatePickerRange
                startDateId="checkin-Id"
                endDateId="checkout-id"
                startDatePlaceholderText="Check In"
                endDatePlaceholderText="Check Out"
                numberOfMonths={1}
                small
                selectDates={dateSelection}
                startDate={search.startDate ? moment(search.startDate) : null}
                endDate={search.endDate ? moment(search.endDate) : null}
              />
            </NoSSR>
          </Col>
          <Col xs={24} xl={4}>
            <Select
              showSearch
              style={{ paddingLeft: "10px", width: "100%" }}
              placeholder="Guests"
              optionFilterProp="children"
              onChange={changeGuests}
            >
              {range(1, 13).map((guest) => {
                return <Option value={guest}>{guest}</Option>;
              })}
            </Select>
          </Col>
          <Col xs={24} xl={3}>
            <Button type="primary" icon={<SearchOutlined />} onClick={searchApartments} >
              Search
            </Button>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default HomeSearch;
