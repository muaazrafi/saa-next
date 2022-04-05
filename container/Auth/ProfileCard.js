import React from "react";
import { useSelector } from "react-redux";
import { Card, Button } from "antd";
import { CgProfile } from "react-icons/cg";
import { AiTwotoneEdit } from "react-icons/ai";

const ProfileCard = (props) => {
  const { currentUser, loading } = useSelector((state) => state.auth);
  console.log("Current User: ", currentUser);
  return (
    <Card
      title={
        <>
          <CgProfile size={24} /> Your Info
        </>
      }
      hoverable
      loading={loading}
      extra={
        <Button size='small' ><AiTwotoneEdit /> Edit</Button>
      }
    >
      {currentUser && (
        <>
          {currentUser.first_name} {currentUser.last_name}
          <br />
          {currentUser.email}
          <br />
          {currentUser.phone}
        </>
      )}
    </Card>
  );
};

export default ProfileCard;
