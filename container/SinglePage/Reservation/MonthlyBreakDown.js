import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Tooltip } from "antd";
import { MdHelpCenter } from "react-icons/md";
import ApartmentCurrency from "container/SinglePage/ApartmentCurrency/ApartmentCurrency";

const MonthlyBreakDown = () => {
  const { monthlyBreakdown } = useSelector((state) => state.booking);
  console.log("Monthly break down: ", monthlyBreakdown);
  return (
    <>
      {monthlyBreakdown && (
        <>
          {Object.entries(monthlyBreakdown).map((month) => {
            return (
              <Row style={{ width: "100%" }}>
                <Col span={18}>
                  {month[0]}
                  <Tooltip
                    placement="top"
                    title={`Rent will be collected in month of ${month[0]}.`}
                  >
                    <MdHelpCenter fontSize={18} />
                  </Tooltip>
                </Col>
                <Col span={6}>
                  <strong>
                    <ApartmentCurrency /> {Math.ceil(month[1])}
                  </strong>
                </Col>
              </Row>
            );
          })}
        </>
      )}
    </>
  );
};

export default MonthlyBreakDown;
