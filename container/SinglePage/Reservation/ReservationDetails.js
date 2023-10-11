import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Tooltip } from "antd";
import { MdHelpCenter } from "react-icons/md";
import ApartmentCurrency from "container/SinglePage/ApartmentCurrency/ApartmentCurrency";
import { updatePrice } from "store/bookingSlice";
import PriceBreakDown from "./PriceBreakDown";

const ReservationDetails = () => {
  const dispatch = useDispatch();
  const { apartment } = useSelector((state) => state.apartment);
  const { currentUser } = useSelector((state) => state.auth);
  const { booking, amountDue, grandTotal, bookingFee } = useSelector(
    (state) => state.booking
  );

  useEffect(() => {
    if (apartment) {
      dispatch(updatePrice(apartment));
    }
  }, [apartment, booking.check_in, booking.check_out]);

  return (
    <>
      <Row style={{ width: "100%" }}>
        <Col span={18}>
          Down Payment
          <Tooltip
            placement="top"
            title={
              currentUser && !currentUser.must_pay_deposit
                ? "Deposit is already paid, thank you. Please continue with the booking."
                : "Deposit to hold this apartment. This amount will be applied to the first month's charges."
            }
          >
            <MdHelpCenter fontSize={18} />
          </Tooltip>
        </Col>
        <Col span={6}>
          <strong
            className={
              currentUser && !currentUser.must_pay_deposit
                ? "strike-through"
                : ""
            }
          >
            {apartment && (
              <>
                <ApartmentCurrency currency={apartment.currency} /> 100
              </>
            )}
          </strong>
        </Col>
      </Row>
      {apartment && booking.check_in && booking.check_out && (
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
                <ApartmentCurrency currency={apartment.currency} />{" "}
                {apartment.reservation_deposit}
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
              {/* <p style={{ fontSize: "10px", color: "#999" }}>
                Includes one-time service fee of {Math.ceil(bookingFee)}. To be
                paid 3 days after approval.
              </p> */}
            </Col>
            <Col span={6}>
              <ApartmentCurrency currency={apartment.currency} />
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
                <ApartmentCurrency currency={apartment.currency} />{" "}
                {Math.ceil(grandTotal)}
              </strong>
            </Col>
            <Col span={24}>
              <PriceBreakDown />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ReservationDetails;
