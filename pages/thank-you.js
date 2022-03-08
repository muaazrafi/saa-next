import React from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { AiFillPhone } from "react-icons/ai";
import { FaThumbsUp } from "react-icons/fa";

const ThankYou = (props) => {
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <>
      <div class="thankyou-holder">
        <div class="thankyou-title"></div>
      </div>
      <div className="center-stage">
        <Row gutter={20}>
          <Col md={12} sm={24} xs={24}>
            <p style={{ textAlign: "center" }}>
              <AiFillPhone size={32} />
            </p>
            <p className="thank-para">
              The accommodation provider will contact you within 24-48 hours to
              help continue your booking.
            </p>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <p style={{ textAlign: "center" }}>
              <FaThumbsUp size={32} />
            </p>
            <p className="thank-para">
              As you proceed we'll be there along the way for additional service
              support and suggestions.
            </p>
          </Col>
        </Row>
        <hr />
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
            book: <span className="referral-link" >{currentUser.promo_code.promo_code}</span>
          </p>
        )}
      </div>
    </>
  );
};

export default ThankYou;
