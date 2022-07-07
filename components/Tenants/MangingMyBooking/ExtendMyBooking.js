import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const ExtendMyBooking = () => {
  return (
    <>
      <div className='container'>
        <h1 className='extendHeader'>Extend my ongoing Booking</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <div
            style={{
              display: "flex",
            }}>
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
            <h3 style={{ paddingLeft: "5px" }}>Thomas H</h3>
          </div>
          <div style={{ paddingRight: "105px" }}>
            <a className='followbtn'>follow</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtendMyBooking;
