import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Card } from "antd";
import CardDetails from "./CardDetails";
import { BsFillCreditCard2FrontFill } from 'react-icons/bs';

const CardHolder = (props) => {
  const { loading } = useSelector((state) => state.card);

  return (
    <Card title={<><BsFillCreditCard2FrontFill size={24} /> Card Information</>} hoverable>
      <CardDetails />
    </Card>
  );
}
export default CardHolder;
