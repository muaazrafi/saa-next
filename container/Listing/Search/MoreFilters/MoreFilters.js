import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import { Modal, Button, Collapse, Row, Col } from "antd";
import { range } from "lodash";
import { FaBed } from "react-icons/fa";
import { MdMeetingRoom, MdHomeWork } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";
import { searching } from "store/apartmentsSlice";
import Selector from "../Selector/Selector";
import Amenties from "../Amenties/Amenties";
import Areas from "../Areas/Areas";
import MoreFilterWrapper from "./MoreFilter.style";
const { Panel } = Collapse;

const MoreFilters = (props) => {
  const dispatcher = useDispatch();
  const router = useRouter();
  const { search, loading, selectedAmenties } = useSelector(
    (state) => state.apartments
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    router.push(`/listings/${search.property_city_matches}?q=${JSON.stringify(search)}`, undefined, { shallow: true }).then( () =>{
      dispatcher(searching());
    });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <MoreFilterWrapper>
      <Button size="large" onClick={showModal}>
        More Filters
      </Button>
      <Modal
        title="More Filters"
        visible={isModalVisible}
        onCancel={handleCancel}
        bodyStyle={{ height: "84vh", padding: "0px" }}
        className="more-filters-modal"
        okText='Search'
        onOk={handleOk}
        okButtonProps={{
          loading: loading
        }}
      >
        <Collapse defaultActiveKey={["1"]} accordion={true} >
          <Panel header="Basic" key="1">
            <Row gutter={10} style={{ width: "100%" }}>
              <Col xs={12}>
                <Selector
                  title="Type"
                  modifier="apart_type_eq"
                  icon={<MdHomeWork size={18} />}
                  options={["apartment", "room"]}
                />
              </Col>
              <Col xs={12}>
                <Selector
                  title="Beds"
                  modifier="number_of_beds_gteq"
                  icon={<FaBed size={18} />}
                  options={range(1, 11)}
                />
              </Col>
            </Row>
            <Row gutter={10} style={{ marginTop: '10px', width: "100%" }}>
              <Col xs={12}>
                <Selector
                  title="Bedrooms"
                  modifier="number_of_bedrooms_eq"
                  icon={<MdMeetingRoom size={18} />}
                  options={range(1, 11)}
                />
              </Col>
              <Col xs={12}>
                <Selector
                  title="Baths"
                  modifier="number_of_bathrooms_gteq"
                  icon={<GiBathtub size={18} />}
                  options={range(1, 11)}
                />
              </Col>
            </Row>
          </Panel>
          <Panel header={selectedAmenties.length > 0 ? `Amenties (${selectedAmenties.length})` : "Amenties"} key="2">
            <Amenties />
          </Panel>
          <Panel header={search.property_area_in.length > 0 ? `Neighborhood (${search.property_area_in.length})` : "Neighborhood"} key="3">
            <Areas />
          </Panel>
        </Collapse>
      </Modal>
    </MoreFilterWrapper>
  );
};

export default MoreFilters;
