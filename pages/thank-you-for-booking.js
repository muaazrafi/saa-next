import React from "react";
import { useSelector } from "react-redux";

const ThankYouForBooking = (props) => {
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <>
      <div class="banner-vsual">
        <div class="banner-overlay"></div>
        <div class="banner-content-holder">
          <div class="banner-content">
            <h1>
              Thankyou for your
              <br /> Payment
            </h1>
          </div>
        </div>
      </div>
      <div className="center-stage">
        <h1
          style={{
            textAlign: "center",
            color: "#0088e5",
            fontSize: "28px",
            fontFamily: "'Cabin', sans-serif",
          }}
        >
          Want to help your friends save and earn cash rewards?
        </h1>
        <p className="thank-para" style={{ fontSize: "14px" }}>
          Refer a friend and they get 5% off the SAA service fee. Once your
          friend books with us we will give you 7% of your friends booking fee.
          It's that easy!
        </p>
        <p className="thank-para" style={{ fontSize: "14px" }}>
          Just share this link with your social network:
        </p>
        {currentUser && (
          <p className="referral-link">{currentUser.referral_link}</p>
        )}
        {currentUser && currentUser.promo_code && (
          <p className="thank-para">
            You can also tell your friends to use this promo code when they
            book:{" "}
            <span className="referral-link">
              {currentUser.promo_code.promo_code}
            </span>
          </p>
        )}
      </div>
    </>
  );
};

export default ThankYouForBooking;
