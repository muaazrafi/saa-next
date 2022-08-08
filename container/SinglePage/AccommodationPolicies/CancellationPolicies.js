import React from "react";
import { Tooltip } from "antd";
import { IoMdHelpCircle } from "react-icons/io";

const CancellationPolicies = ({ cancellation_policy }) => {
  const cancellation_policies = {
    "Moderate":
      "If a user cancels up to 60 days before move in date, there is a 50% refund for the payment on the first month rent payment. If the user cancels up to 30 days before move in date there is a 25% refund for the payment on the first month rent payment. If the user cancels under 30 days before move in date, there is no refund available for the payment on the first month rent payment.",
    "Relaxed":
      "If a user cancels up to 30 days before move in date, there is a 100% refund for the payment on the first month rent payment. If the user cancels up to 15 days before move in date there is a 50% refund for the payment on the first month rent payment. If the user cancels under 15 days before move in date there is no refund available for the payment on the first month rent payment.",
    "Strict":
      "If a user cancels up to 90 days before move in date, there is a 25% refund for the payment on the first month rent payment. If the user cancels under 90 days before move in date there is no refund for the payment on the first month rent payment.",
  };

  return (
    <>
      {cancellation_policy && (
        <Tooltip placement="top" title={cancellation_policies[cancellation_policy]}>
          <IoMdHelpCircle size={20} />
        </Tooltip>
      )}
    </>
  );
};

export default CancellationPolicies;
