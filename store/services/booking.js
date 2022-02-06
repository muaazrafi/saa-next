// $scope.updatePricing = function () {
//   let price;
//   if (($scope.booking.check_in != undefined) && ($scope.booking.check_out != undefined) && (apartment != undefined) && (apartment.reservation_deposit)) {
//       //dates selected, apt has res deposit
//       price = new Price(apartment, $scope.booking);
//       $scope.first_month_rent = Math.floor(price.firstMonthRent());
//       $scope.first_month_is_partial = price.firstMonthIsPartial();
//       $scope.last_month_is_partial = price.lastMonthIsPartial();
//       $scope.amount_due = price.amountDueForFirstMonth() + apartment.reservation_deposit_amount;
//       $scope.saa_booking_fee = price.saaBookingFee();
//       $scope.grand_total = price.totalRentWithFees() + $scope.saa_booking_fee;
//       $scope.monthly_breakdown = price.monthlyBreakdownAfterFirstMonth();
//       $scope.start_of_first_month = moment(price.startOfFirstMonth()).format('MM/DD');
//       $scope.end_of_first_month = moment(price.endOfFirstMonth()).format('MM/DD');
//       $scope.final_day_to_pay = moment(price.finalDayToPay()).format('MM/DD');
//       $scope.surcharge = price.variedPricingSurcharge();
//       $scope.extra_tenant_charges = price.extra_tenant_charges();
//       $scope.excess_tenants = price.excess_tenants();
//   } else if (($scope.booking.check_in != undefined) && ($scope.booking.check_out != undefined) && (apartment != undefined)) {
//       price = new Price(apartment, $scope.booking);
//       $scope.first_month_rent = Math.floor(price.firstMonthRent());
//       $scope.first_month_is_partial = price.firstMonthIsPartial();
//       $scope.last_month_is_partial = price.lastMonthIsPartial();
//       $scope.amount_due = price.amountDueForFirstMonth() + apartment.reservation_deposit_amount;
//       $scope.saa_booking_fee = price.saaBookingFee();
//       $scope.grand_total = price.totalRentWithFees() + $scope.saa_booking_fee;
//       $scope.monthly_breakdown = price.monthlyBreakdownAfterFirstMonth();
//       $scope.start_of_first_month = moment(price.startOfFirstMonth()).format('MM/DD');
//       $scope.end_of_first_month = moment(price.endOfFirstMonth()).format('MM/DD');
//       $scope.final_day_to_pay = moment(price.finalDayToPay()).format('MM/DD');
//       $scope.surcharge = price.variedPricingSurcharge();
//       $scope.extra_tenant_charges = price.extra_tenant_charges();
//       $scope.excess_tenants = price.excess_tenants();
//   } else if ((apartment != undefined) && (apartment.reservation_deposit)) {
//       //no dates selected, apt has reservation deposit
//       $scope.first_month_rent = apartment.display_price;
//       $scope.amount_due = apartment.display_price + apartment.default_booking_fee + apartment.reservation_deposit_amount;
//       $scope.saa_booking_fee = apartment.default_booking_fee;
//   } else if (apartment != undefined) {
//       // no dates selected, nop reservation deposit
//       $scope.first_month_rent = apartment.display_price;
//       $scope.amount_due = apartment.display_price + apartment.default_booking_fee;
//       $scope.saa_booking_fee = apartment.default_booking_fee;
//   }
// };