import React from "react";
import { Card, Progress, Tooltip } from "antd";
import ApartmentCurrency from "container/SinglePage/ApartmentCurrency/ApartmentCurrency";

const AmountPaid = ({ booking }) => {
  return (
    <Card title="Amount Paid">
      <div style={{ textAlign: "center" }}>
        <Tooltip title={`Paid Amount / First Month Payment`}>
          <Progress
            type="circle"
            percent={100}
            success={{
              percent: Math.ceil(
                (booking.paid_balance / booking.first_month_payment) * 100
              ),
            }}
            status="active"
            format={() => {
              return (
                <span style={{ fontSize: "20px" }}>
                  <ApartmentCurrency currency={booking.currency} />
                  {booking.paid_balance} /<br />
                  <ApartmentCurrency currency={booking.currency} />
                  {booking.first_month_payment}
                </span>
              );
            }}
          />
        </Tooltip>
      </div>
    </Card>
  );
};

export default AmountPaid;
