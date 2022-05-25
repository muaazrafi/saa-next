import React from "react";
import { Tooltip } from "antd";
import { IoMdHelpCircle } from "react-icons/io";

const ContractTypes = ({ contract_type }) => {
  const contract_types = {
    "Monthly":
      "A monthly contract means that a student will be given a contract where full month’s rent is charged. In this case, if a user moves into the unit on a date other than the first day of the month, the user will still be charged for the entire month, regardless of when they move in. In a monthly contract a user will always be charged beginning from the first day of the month.",
    "Pro-rated":
      "The type of contract applicable to each offer is selected by the Accommodation Provider. Pro rated contract refers to a contract type where your rents are calculated in proportion to the days of your stay. What this means is that you pay the monthly rent for every full month that you stay, and on your first and last months you only pay for the days you are accommodated. Regardless of the contract type, at the moment of booking, the prices displayed to the student refer to the 1st rent’s payment - corresponding to the first 30 days of contract charged.",
    "Partially pro-rated":
      "Partially pro rated contracts refer to an accommodation provider who only pro rates the tenancy agreement if the tenant is leaving before the 15 days of the month. If the tenant is staying past the first 15 days of the month, accommodation providers with a partially pro rated tenancy agreement type will charge the full month rent.",
  };

  return (
    <>
      {contract_type && (
        <Tooltip placement="top" title={contract_types[contract_type]}>
          <IoMdHelpCircle size={20} />
        </Tooltip>
      )}
    </>
  );
};

export default ContractTypes;
