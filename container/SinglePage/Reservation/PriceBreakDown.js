import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal, Card, Button, Row, Col } from "antd";
import ApartmentCurrency from "container/SinglePage/ApartmentCurrency/ApartmentCurrency";

const PriceBreakDown = (props) => {
  const { apartment } = useSelector((state) => state.apartment);
  const {
    booking,
    firstMonthRent,
    startOfFirstMonth,
    endOfFirstMonth,
    extraTenantCharges,
    bookingFee,
    monthlyBreakdown,
  } = useSelector((state) => state.booking);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button style={{ width: "100%", marginTop: "10px" }} onClick={showModal}>
        Price Breakdown
      </Button>
      <Modal
        title="Price Breakdown"
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <Card title="Before your stay:">
          <Row gutter={10}>
            <Col span={16}>
              <strong>Due upon booking</strong> (down payment):
            </Col>
            <Col span={8} className="text-right">
              <ApartmentCurrency currency={apartment.currency} />
              100
            </Col>
          </Row>
        </Card>
        <br />
        <Card title="Due after landlord acceptance">
          <Row gutter={10}>
            <Col span={16}>
              <strong>
                First month ({startOfFirstMonth} - {endOfFirstMonth}){" "}
              </strong>
              :
            </Col>
            <Col span={8} className="text-right">
              <ApartmentCurrency currency={apartment.currency} />
              {firstMonthRent - extraTenantCharges}
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={16}>
              <strong>+ SAA Service Fee</strong>:
            </Col>
            <Col span={8} className="text-right">
              <ApartmentCurrency currency={apartment.currency} />
              {booking.has_promo_code
                ? bookingFee + booking.discount_amount
                : bookingFee}
            </Col>
          </Row>

          <Row gutter={10} style={{ color: "darkred" }}>
            <Col span={16}>
              <strong>- Down Payment</strong>:
            </Col>
            <Col span={8} className="text-right">
              <ApartmentCurrency currency={apartment.currency} />
              100
            </Col>
          </Row>

          {extraTenantCharges > 0 && (
            <>
              <Row gutter={10}>
                <Col span={16}>
                  <strong>Total Extra Charges:</strong>:
                </Col>
                <Col span={8} className="text-right">
                  <ApartmentCurrency currency={apartment.currency} />
                  {extraTenantCharges}
                </Col>
              </Row>
            </>
          )}

          <hr />
          <Row gutter={10}>
            <Col span={16}>
              <strong>2nd Payment Total</strong>:
            </Col>
            <Col span={8} className="text-right">
              <ApartmentCurrency currency={apartment.currency} />
              100
            </Col>
          </Row>
        </Card>
        <br />
        <Card title="During your stay">
          <p>
            We only transfer your first month to the landlord 24 hours after you
            move in or after a signed lease contract is completed.
          </p>
          {monthlyBreakdown &&
            Object.entries(monthlyBreakdown).map((month) => {
              return (
                <Row gutter={10}>
                  <Col span={16}>
                    <strong>{month[0]}</strong>:
                  </Col>
                  <Col span={8} className="text-right">
                    <ApartmentCurrency currency={apartment.currency} />
                    {Math.ceil(month[1])}
                  </Col>
                </Row>
              );
            })}
          <hr />
          <Row gutter={10}>
            <Col span={16}>
              <strong>Bills:</strong>
            </Col>
            <Col span={8} className="text-right">
              {apartment.utilities_info}
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={16}>
              <strong>Paid to:</strong>
            </Col>
            <Col span={8} className="text-right">
              Landlord
            </Col>
          </Row>

          <Row gutter={10}>
            <Col span={16}>
              <strong>Contract Type:</strong>
            </Col>
            <Col span={8} className="text-right">
              {apartment.contract_type}
            </Col>
          </Row>
        </Card>
        <br />
        <Card title="Additional Charges">
          {apartment.security_deposit !== 0 && (
            <p>
              <strong>Security Deposit:</strong> Your landlord will require a
              security deposit of{" "}
              <ApartmentCurrency currency={apartment.currency} />
              {apartment.security_deposit}. When you move out, this amount will
              be returned to you as long as the apartment is in the same
              condition as it was when you moved in.
            </p>
          )}
          {apartment.utilities_info && (
            <p>
              <strong>Bills:</strong> Monthly charges services such as gas,
              electricity, and internet connectivity are
              {apartment.utilities_info !== "Included Limited" && (
                <span>{apartment.utilities_info} in the cost of rent.</span>
              )}
              {apartment.utilities_info !== "Included Limited" && (
                <span>partially included in the monthly rental cost.</span>
              )}
            </p>
          )}
          {apartment.management_fee > 0 && (
            <p>
              <strong>Management Fee:</strong>{" "}
              <ApartmentCurrency currency={apartment.currency} />
              {apartment.management_fee}
            </p>
          )}
        </Card>
      </Modal>
    </>
  );
};

export default PriceBreakDown;
