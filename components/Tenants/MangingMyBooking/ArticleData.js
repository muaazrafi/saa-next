import React from "react";
import { Avatar } from "antd";
import {
  UserOutlined,
  TwitterCircleFilled,
  LinkedinOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

const ArticleData = ({ articleData }) => {
  return (
    <>
      <div className='container'>
        <h1 className='extendHeader'>{articleData?.title}</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <div>
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
            <span
              style={{
                position: "absolute",
              }}>
              <span>{articleData?.aurthorName}</span>
              <br />
              <span>{articleData?.updateDate} - Updated</span>
            </span>
          </div>
          <div>
            <a className='followbtn'>follow</a>
          </div>
        </div>

        <div
          style={{
            paddingTop: "50px",
          }}>
          {articleData?.description}
        </div>
        <div>
          <FacebookOutlined />
          <TwitterCircleFilled />
          <LinkedinOutlined />
        </div>
      </div>
    </>
  );
};

export default ArticleData;
