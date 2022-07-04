import { React, useState } from "react";
import { Row, Col, Input, Button, Radio, Tabs } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;
const ExtendMyOngoingBooking = () => {
  const [mode, setMode] = useState("left");
  const onChange = (e) => {
    setMode(e.target.value);
  };
  return (
    <>
      <div>
        <Tabs
          className='invisible-scrollbar'
          tabPosition={mode}
          defaultActiveKey='1'
          onChange={onChange}>
          <TabPane tab='Extend My Ongoing Booking' key='1'>
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab='Cancellation Policy before 2nd of March 2022' key='2'>
            Content of Tab Pane 2
          </TabPane>
          <TabPane
            tab='Spotahome Guarantees and Force Majeure for Tenants'
            key='3'>
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab='Spotahome Cancellation Policy' key='4'>
            Content of Tab Pane 4
          </TabPane>
          <TabPane tab='Help - I have moving issues with my property' key='5'>
            Content of Tab Pane 5
          </TabPane>
          <TabPane tab='Changes in my dates' key='6'>
            Content of Tab Pane 6
          </TabPane>
          <TabPane tab='My Contract' key='7'>
            Content of Tab Pane 7
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default ExtendMyOngoingBooking;
