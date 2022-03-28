import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import PropTypes from "prop-types";
import Card from "components/UI/Card/Card";
import Heading from "components/UI/Heading/Heading";
import Text from "components/UI/Text/Text";
import RenderReservationForm from "./RenderReservationForm";
import ReservationDetails from "./ReservationDetails";
import ViewSeasonalPricing from './ViewSeasonalPricing';

import ApartmentCurrency from "container/SinglePage/ApartmentCurrency/ApartmentCurrency";

const CardHeader = ({ priceStyle, pricePeriodStyle, linkStyle }) => {
  const { apartment } = useSelector((state) => state.apartment);
  const { firstMonthRent } = useSelector((state) => state.booking);

  return (
    <>
      <Heading
        content={
          <>
            {apartment && (
              <>
                <ApartmentCurrency currency={apartment.currency} />{" "}
                {firstMonthRent}
              </>
            )}
            <Text as="span" content="/ monthy" {...pricePeriodStyle} />
            <ViewSeasonalPricing />
          </>
        }
        {...priceStyle}
      />
      <>
      {apartment && (
        <>
          Bills: {apartment.utilities_info} /
          <br/>
          Min Stay: {apartment.minimum_stay} days
        </>
      )}
      </>
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
      footer={<ReservationDetails />}
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
