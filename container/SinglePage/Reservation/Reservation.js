import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { Row, Col, Tooltip } from "antd";
import { MdHelpCenter } from "react-icons/md";
import PropTypes from "prop-types";
import Card from "components/UI/Card/Card";
import Heading from "components/UI/Heading/Heading";
import Text from "components/UI/Text/Text";
import RenderReservationForm from "./RenderReservationForm";
import { updatePrice } from "/store/bookingSlice";
import ApartmentCurrency from "container/SinglePage/ApartmentCurrency/ApartmentCurrency";

const CardHeader = ({ priceStyle, pricePeriodStyle, linkStyle }) => {
  const dispatch = useDispatch();
  const { apartment } = useSelector((state) => state.apartment);
  const { booking, firstMonthRent } = useSelector((state) => state.booking);

  useEffect(() => {
    if (apartment) {
      dispatch(updatePrice(apartment));
    }
  }, [apartment, booking.checkIn, booking.checkOut]);

  return (
    <>
      <Heading
        content={
          <>
            <ApartmentCurrency /> {firstMonthRent}{" "}
            <Text as="span" content="/ monthy" {...pricePeriodStyle} />
          </>
        }
        {...priceStyle}
      />
      <Link href="/#1">
        <a style={{ ...linkStyle }}>Contact Us</a>
      </Link>
    </>
  );
};

export default function Reservation({ linkStyle }) {
  const { apartment } = useSelector((state) => state.apartment);
  const { booking, amountDue, grandTotal, bookingFee } = useSelector(
    (state) => state.booking
  );

  return (
    <Card
      className="reservation_sidebar"
      header={<CardHeader />}
      content={<RenderReservationForm />}
      footer={
        <>
          <Row style={{ width: "100%" }}>
            <Col span={18}>
              Down Payment
              <Tooltip
                placement="top"
                title="Deposit to hold this apartment. This amount will be applied to the first month's charges."
              >
                <MdHelpCenter fontSize={18} />
              </Tooltip>
            </Col>
            <Col span={6}>
              <strong>
                <ApartmentCurrency /> 100
              </strong>
            </Col>
          </Row>
          {apartment && booking.checkIn && booking.checkOut && (
            <>
              {apartment.reservation_deposit && (
                <Row style={{ width: "100%" }}>
                  <Col span={18}>
                    Reservation Deposit
                    <Tooltip
                      placement="top"
                      title="Deposit sent straight away to hold the accommodation. This is either fully refunded or added to the security deposit upon arrival."
                    >
                      <MdHelpCenter fontSize={18} />
                    </Tooltip>
                  </Col>
                  <Col span={6}>
                    <ApartmentCurrency /> {apartment.reservation_deposit}
                  </Col>
                </Row>
              )}
              <Row style={{ width: "100%" }}>
                <Col span={18}>
                  Second payment
                  <Tooltip
                    placement="top"
                    title="Due 3 days after the landlord approves your booking. If you like, you may split this payment with your roommates."
                  >
                    <MdHelpCenter fontSize={18} />
                  </Tooltip>
                  <p style={{ fontSize: "10px", color: "#999" }}>
                    Includes one-time service fee of {Math.ceil(bookingFee)}. To
                    be paid 3 days after approval.
                  </p>
                </Col>
                <Col span={6}>
                  <ApartmentCurrency />{" "}
                  {Math.ceil(amountDue - apartment.booking_request_amount)}
                </Col>
              </Row>
              <hr />
              <Row style={{ width: "100%" }}>
                <Col span={18}>
                  Total
                  <Tooltip
                    placement="top"
                    title="Due 3 days after the landlord approves your booking. If you like, you may split this payment with your roommates."
                  >
                    <MdHelpCenter fontSize={18} />
                  </Tooltip>
                </Col>
                <Col span={6}>
                  <strong>
                    <ApartmentCurrency /> {Math.ceil(grandTotal)}
                  </strong>
                </Col>
              </Row>
            </>
          )}
        </>
      }
    />
  );
}

CardHeader.propTypes = {
  priceStyle: PropTypes.object,
  pricePeriodStyle: PropTypes.object,
  linkStyle: PropTypes.object,
};

CardHeader.defaultProps = {
  priceStyle: {
    color: "#2C2C2C",
    fontSize: "25px",
    fontWeight: "700",
  },
  pricePeriodStyle: {
    fontSize: "15px",
    fontWeight: "400",
  },
  linkStyle: {
    fontSize: "15px",
    fontWeight: "700",
    color: "#0088E5",
  },
};
