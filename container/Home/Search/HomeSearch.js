import React, { useState } from "react";
import NoSSR from "react-no-ssr";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { cloneDeep, range } from "lodash";
import { useRouter } from "next/router";
import { Form, Row, Col, Select, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { searching, updateSearch } from "store/apartmentsSlice";
import DatePickerRange from "components/UI/DatePicker/ReactDates";

const { Option } = Select;

const HomeSearch = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.apartments);
  const router = useRouter();
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const dateSelection = (startDate, endDate) => {
    const startDateState = startDate ? startDate.format("YYYY-MM-DD") : null;
    const endDateState = endDate ? endDate.format("YYYY-MM-DD") : null;
    setStart(startDateState);
    setEnd(endDateState);
  };

  const searchApartments = (values) => {
    let modifiedSearch = cloneDeep(search);
    modifiedSearch.property_city_matches = values.location;
    modifiedSearch.number_of_max_occupants_gteq = values.guests
      ? values.guests
      : "";
    modifiedSearch.startDate = start;
    modifiedSearch.endDate = end;
    router
      .push(
        `/listings/${modifiedSearch.property_city_matches}?q=${JSON.stringify(
          modifiedSearch
        )}`,
        undefined,
        { shallow: false }
      )
      .then(() => {
        dispatch(searching());
      });
  };

  return (
    <section className="booking_section">
      <div className="container">
        <Form
          name="normal_login"
          className="login-form"
          layout="vertical"
          onFinish={searchApartments}
        >
          <Row gutter={[20, 20]}>
            <Col xs={24} xl={9}>
              <Form.Item
                name="location"
                rules={[{ required: true, message: "Please select location" }]}
                style={{ marginBottom: "0px" }}
              >
                <Select
                  showSearch
                  style={{ width: "100%" }}
                  placeholder="Where do you want to go?"
                  optionFilterProp="children"
                >
                  <Option value="barcelona">Barcelona</Option>
                  <Option value="madrid">Madrid</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} xl={8}>
              <NoSSR>
                <Form.Item name="dates" style={{ marginBottom: "0px" }}>
                  <DatePickerRange
                    startDateId="checkin-Id"
                    endDateId="checkout-id"
                    startDatePlaceholderText="Check In"
                    endDatePlaceholderText="Check Out"
                    numberOfMonths={1}
                    small
                    selectDates={dateSelection}
                  />
                </Form.Item>
              </NoSSR>
            </Col>
            <Col xs={24} xl={4}>
              <Form.Item name="guests" style={{ marginBottom: "0px" }}>
                <Select
                  showSearch
                  style={{ width: "100%" }}
                  placeholder="Guests"
                  optionFilterProp="children"
                >
                  {range(1, 11).map((guest) => {
                    return <Option value={guest}>{guest}</Option>;
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} xl={3}>
              <Form.Item style={{ marginBottom: "0px" }}>
                <Button
                  type="primary"
                  icon={<SearchOutlined />}
                  htmlType="submit"
                  className="home-search-button"
                >
                  Search
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </section>
  );
};

export default HomeSearch;
