import React, { Fragment } from "react";
import useWindowSize from "./useWindowSize";
import { useSelector } from "react-redux";
import ApartmentCurrency from "container/SinglePage/ApartmentCurrency/ApartmentCurrency";
import StickyBookingWrapper, {
  HotelInfo,
  InfoArea,
  Title,
  Logo,
  HotelAction,
  Price,
  ActionBtn,
} from "./StickyBooking.style";

const StickyBooking = ({ logo, title, price, rating, action, className }) => {
  // Add all classs to an array
  const { apartment, firstMonthRent } = useSelector((state) => state.apartment);
  const addAllClasses = ["sticky_booking"];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // useWindowSize hook
  const windowSize = useWindowSize();
  const windowInnerWidth = process.browser && windowSize.innerWidth;

  return (
    <StickyBookingWrapper className={addAllClasses.join(" ")}>
      {apartment && (
        <>
          <HotelInfo className="hotel_info">
            {windowInnerWidth > 767 && (
              <Fragment>{logo && <Logo src={logo} alt={title} />}</Fragment>
            )}

            <InfoArea>
              {windowInnerWidth > 767 ? (
                <Fragment>{title && <Title>{apartment.name}</Title>}</Fragment>
              ) : (
                <Price>
                  <ApartmentCurrency currency={apartment.currency} />{" "}
                  {apartment.display_price} / Monthly
                </Price>
              )}
            </InfoArea>
          </HotelInfo>

          <HotelAction className="hotel_action">
            {windowInnerWidth > 767 && (
              <Price>
                <ApartmentCurrency currency={apartment.currency} />{" "}
                {apartment.display_price} / Monthly
              </Price>
            )}
            <ActionBtn>{action}</ActionBtn>
          </HotelAction>
        </>
      )}
    </StickyBookingWrapper>
  );
};

export default StickyBooking;
