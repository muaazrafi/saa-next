import React from "react";
import { useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Card, Alert, Button, notification } from "antd";
import { BiLink } from "react-icons/bi";

const ReferralCard = (props) => {
  const { currentUser, loading } = useSelector((state) => state.auth);
  const copyReferralLink = () => {};

  return (
    <Card
      title={
        <>
          <BiLink size={24} />
          Referral
        </>
      }
      hoverable
      loading={loading}
    >
      <p>
        Refer a friend and they get <strong>5%</strong> off the SAA service fee.
        Once your friend books with us we will give you <strong>7%</strong> of
        your friends booking fee. It's that easy!*
      </p>
      <Alert
        message="Just share this link with your social network:"
        description={currentUser && currentUser.referral_link}
        type="info"
        className="referralLinkAlert"
        action={
          <CopyToClipboard
            text={currentUser && currentUser.referral_link}
            onCopy={() => {
              notification["success"]({
                message: "Copied",
                description: "Successfully copied referral link.",
              });
            }}
          >
            <Button>Copy</Button>
          </CopyToClipboard>
        }
      />
      {currentUser && currentUser.promo_code && (
        <p>
          You can also tell your friends to use this promo code when they book:{" "}
          <strong>{currentUser && currentUser.promo_code.promo_code}</strong>{" "}
        </p>
      )}

      <p>
        If you want to actively represent SAA on your campus and make money, we
        can provide resources and additional incentives.
        <br /> Sign up to <a>Become a Campus Ambassador</a> to get started.
      </p>
      <p>
        * Promo codes need to be used upon booking or the commission and
        discount will not be accepted.
      </p>
    </Card>
  );
};

export default ReferralCard;
