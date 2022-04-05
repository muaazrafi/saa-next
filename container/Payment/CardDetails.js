import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { show } from "store/services/card";

const CardDetails = (props) => {
  const dispatch = useDispatch();
  const { card } = useSelector((state) => state.card);

  useEffect(() => {
    if (!card) {
      dispatch(show());
    }
  }, []);

  return (
    <>
      {card && card.customer_detail && (
        <>
          <Row gutter={10}>
            <Col span={12}>
              <strong>Card Holder</strong>
            </Col>
            <Col span={12} className="text-right">
              <span style={{ textTransform: "capitalize" }}>
                {card.customer_detail.card.brand}
              </span>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={12}>
              <strong>Last 4 Digit</strong>
            </Col>
            <Col span={12} className="text-right">
              **********{card.customer_detail.card.last4}
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={12}>
              <strong>Exp Date</strong>
            </Col>
            <Col span={12} className="text-right">
              {card.customer_detail.card.exp_month}/
              {card.customer_detail.card.exp_year}
            </Col>
          </Row>
        </>
      )}
    </>
  );
};
export default CardDetails;
