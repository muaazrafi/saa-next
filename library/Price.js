import moment from "moment";

const Price = class {

  constructor(apartment, booking) {
    this.apartment = apartment;
    this.booking = booking;
  }

  stayLength () {
    return moment(this.booking.check_out).diff(moment(this.booking.check_in), 'days') + 1;
  }

  startOfFirstMonth () {
    let contractType = this.apartment.contract_type;
    if (contractType === "Monthly" || contractType === "Partially pro-rated" && moment(this.booking.check_in).date() <= 14) {
      return moment(this.booking.check_in).startOf('month');
    } else {
      return moment(this.booking.check_in);
    }
  }

  endOfFirstMonth () {
    let daysInMonth, endDate;
    if (moment(this.startOfFirstMonth()).date() === 1) {
      daysInMonth = moment(this.startOfFirstMonth()).daysInMonth();
      endDate = daysInMonth - 1;
    } else {
      endDate = 29;
    }
    return moment(this.startOfFirstMonth()).add(endDate, 'd').format('YYYY-MM-DD');
  }

  firstMonthIsPartial () {
    let firstDayOfFirstMonth = moment(this.startOfFirstMonth()).date();
    let lastDayOfFirstMonth = moment(this.endOfFirstMonth()).date();
    let lastDayOfFirstMonthIsEndOfCalendarMonth = moment(this.endOfFirstMonth()).date() === lastDayOfFirstMonth;
    return !(firstDayOfFirstMonth === 1 && lastDayOfFirstMonthIsEndOfCalendarMonth);
  }

  dailyPrice (day) {
    let seasons = this.apartment.seasons;
    let daysInMonth = moment(day).daysInMonth();

    let correctSeason = seasons.find(function(season){
      return (moment(day).isBetween(season.start_date, season.end_date, null, '[]'));
    });
    let daysMonthlyPrice = correctSeason ? correctSeason.monthly_price : this.apartment.fallback_price;
    let totalMonthlyPriceForThatDay = daysMonthlyPrice + this.variedPricingSurcharge();
    return totalMonthlyPriceForThatDay / daysInMonth;
  }

  variedPricingSurcharge () {
    var surcharge = 0;
    surcharge = this.extra_tenant_charges();
    if (this.apartment.penalizes_short_stay && this.stayLength() < this.apartment.penalty_breakpoint) {
      surcharge = surcharge + this.apartment.short_stay_penalty;
    }
    if (this.apartment.discounts_long_stay && this.stayLength() > this.apartment.discount_breakpoint) {
      surcharge = surcharge - this.apartment.long_stay_discount;
    }
    return surcharge;
  }

  extra_tenant_charges () {
      var numRoommates = parseInt(this.booking.number_of_room_mates);
      var surcharge = 0;
      if ((this.apartment.has_surcharge_for_extra_tenants && this.apartment.extra_tenant_threshold != undefined) && (numRoommates > this.apartment.extra_tenant_threshold)) {
          var excessTenants = this.excess_tenants();
          var extraGuestsSurcharge = this.apartment.additional_guest_monthly_price * excessTenants;
          surcharge = surcharge + extraGuestsSurcharge;
      }
      return surcharge
  }

  excess_tenants () {
      return (parseInt(this.booking.number_of_room_mates) - parseInt(this.apartment.extra_tenant_threshold));
  }


  rentInDateRange (start, end) {
    let dateArray = this.enumerateDaysBetweenDates(start, end)
    let total = dateArray.reduce((previous, date) => {
      return previous + this.dailyPrice(date);
    }, 0);
    return total;
  }

  finalDayToPay () {
    let contractType = this.apartment.contract_type;
    let check_outDate = moment(this.booking.check_out).date();
    let defaultsToActualCheckOut = (contractType === 'Pro-rated') || (contractType === 'Partially pro-rated' && check_outDate <= 14)
    let lastDay = defaultsToActualCheckOut ? this.booking.check_out : moment(this.booking.check_out).endOf('month');
    return lastDay;
  }

  lastMonthIsPartial () {
    let lastDay = this.finalDayToPay();
    return moment(lastDay).date() !== moment(lastDay).endOf('month').date();
  }

  firstMonthRent () {
    let lastDay, total, startDay;
    startDay = this.startOfFirstMonth();
    lastDay = moment(this.endOfFirstMonth());
    total = this.rentInDateRange(startDay, lastDay);
    return total;
  }

  saaBookingFee () {
    let fee = this.stayLength() <= 90 ? this.firstMonthRent() * 0.35 : this.firstMonthRent() * 0.44;
    return fee;
  }

  amountDueForFirstMonth () {
    return this.firstMonthRent() + this.saaBookingFee();
  }

  datesAfterFirstMonth () {
    let firstDay = moment(this.endOfFirstMonth()).add(1, 'days');
    let lastDay = moment(this.finalDayToPay());
    let datesArray = this.enumerateDaysBetweenDates(firstDay, lastDay)
    return datesArray;
  }

  monthlyBreakdownAfterFirstMonth() {
    let dates = this.datesAfterFirstMonth();
    const breakdown = dates.reduce((prev, date) => {
      let monthName = moment(date).format('MMMM')
      if (prev.hasOwnProperty(monthName)) {
        prev[monthName] = prev[monthName] + this.dailyPrice(date);
      } else {
        prev[monthName] = this.dailyPrice(date);
      }
      return prev;
    }, {});
    return breakdown;
  }

  totalRentWithFees () {
    let lastDay = moment(this.finalDayToPay());
    let startDay = this.startOfFirstMonth();
    return this.rentInDateRange(startDay, lastDay);
  }

  enumerateDaysBetweenDates (startDate, endDate) {
    startDate = moment(startDate);
    endDate = moment(endDate);
    var now = startDate, dates = [];
    while (now.isBefore(endDate) || now.isSame(endDate)) {
        dates.push(now.format('YYYY-MM-DD'));
        now.add(1, 'days');
    }
    return dates;
  }
}

export default Price;