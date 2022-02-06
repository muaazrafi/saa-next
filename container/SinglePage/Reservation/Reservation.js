import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Price from 'library/Price';
import Card from 'components/UI/Card/Card';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';
import RenderReservationForm from './RenderReservationForm';
import ApartmentCurrency from 'container/SinglePage/ApartmentCurrency/ApartmentCurrency';

// $scope.updatePricing = function () {
//   let price;
//   if (($scope.booking.check_in != undefined) && ($scope.booking.check_out != undefined) && ($scope.apartment != undefined) && ($scope.apartment.reservation_deposit)) {
//       //dates selected, apt has res deposit
//       price = new Price($scope.apartment, $scope.booking);
//       $scope.first_month_rent = Math.floor(price.firstMonthRent());
//       $scope.first_month_is_partial = price.firstMonthIsPartial();
//       $scope.last_month_is_partial = price.lastMonthIsPartial();
//       $scope.amount_due = price.amountDueForFirstMonth() + $scope.apartment.reservation_deposit_amount;
//       $scope.saa_booking_fee = price.saaBookingFee();
//       $scope.grand_total = price.totalRentWithFees() + $scope.saa_booking_fee;
//       $scope.monthly_breakdown = price.monthlyBreakdownAfterFirstMonth();
//       $scope.start_of_first_month = moment(price.startOfFirstMonth()).format('MM/DD');
//       $scope.end_of_first_month = moment(price.endOfFirstMonth()).format('MM/DD');
//       $scope.final_day_to_pay = moment(price.finalDayToPay()).format('MM/DD');
//       $scope.surcharge = price.variedPricingSurcharge();
//       $scope.extra_tenant_charges = price.extra_tenant_charges();
//       $scope.excess_tenants = price.excess_tenants();
//   } else if (($scope.booking.check_in != undefined) && ($scope.booking.check_out != undefined) && ($scope.apartment != undefined)) {
//       price = new Price($scope.apartment, $scope.booking);
//       $scope.first_month_rent = Math.floor(price.firstMonthRent());
//       $scope.first_month_is_partial = price.firstMonthIsPartial();
//       $scope.last_month_is_partial = price.lastMonthIsPartial();
//       $scope.amount_due = price.amountDueForFirstMonth() + $scope.apartment.reservation_deposit_amount;
//       $scope.saa_booking_fee = price.saaBookingFee();
//       $scope.grand_total = price.totalRentWithFees() + $scope.saa_booking_fee;
//       $scope.monthly_breakdown = price.monthlyBreakdownAfterFirstMonth();
//       $scope.start_of_first_month = moment(price.startOfFirstMonth()).format('MM/DD');
//       $scope.end_of_first_month = moment(price.endOfFirstMonth()).format('MM/DD');
//       $scope.final_day_to_pay = moment(price.finalDayToPay()).format('MM/DD');
//       $scope.surcharge = price.variedPricingSurcharge();
//       $scope.extra_tenant_charges = price.extra_tenant_charges();
//       $scope.excess_tenants = price.excess_tenants();
//   } else if (($scope.apartment != undefined) && ($scope.apartment.reservation_deposit)) {
//       //no dates selected, apt has reservation deposit
//       $scope.first_month_rent = $scope.apartment.display_price;
//       $scope.amount_due = $scope.apartment.display_price + $scope.apartment.default_booking_fee + $scope.apartment.reservation_deposit_amount;
//       $scope.saa_booking_fee = $scope.apartment.default_booking_fee;
//   } else if ($scope.apartment != undefined) {
//       // no dates selected, nop reservation deposit
//       $scope.first_month_rent = $scope.apartment.display_price;
//       $scope.amount_due = $scope.apartment.display_price + $scope.apartment.default_booking_fee;
//       $scope.saa_booking_fee = $scope.apartment.default_booking_fee;
//   }
// };


const CardHeader = ({ priceStyle, pricePeriodStyle, linkStyle }) => {

  return (
    <>
      <Heading
        content={
          <>
            <ApartmentCurrency />162 <Text as="span" content="/ monthy" {...pricePeriodStyle} />
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
  return (
    <Card
      className="reservation_sidebar"
      header={<CardHeader />}
      content={<RenderReservationForm />}
      footer={
        <p>
          Special offers available.
          <Link href="/#1">
            <a style={{ ...linkStyle }}>See details</a>
          </Link>
        </p>
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
    color: '#2C2C2C',
    fontSize: '25px',
    fontWeight: '700',
  },
  pricePeriodStyle: {
    fontSize: '15px',
    fontWeight: '400',
  },
  linkStyle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#0088E5',
  },
};
