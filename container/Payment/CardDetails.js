import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "antd";
import { show } from "store/services/card";


const CardDetails = (props) => {
  const dispatch = useDispatch();
  const { card, loading } = useSelector((state) => state.card);

  useEffect(() => {
    if (!card) {
      dispatch(show());
    }
  }, []);
  console.log("Card Details: ", card);
  return (
    <Card title="Card Information" hoverable loading={loading}>
      { card && card.customer_detail && (
        <>
          <span style={{ textTransform: 'capitalize' }} >{card.customer_detail.card.brand}</span>
          <br />
          **********{card.customer_detail.card.last4}
          <br />
          {card.customer_detail.card.exp_month}/{card.customer_detail.card.exp_year}
        </>
      ) }
    </Card>
  );
}
export default CardDetails;
