import React from "react";
import { useRouter } from "next/router";
import ManageBookingLayout from "../../../components/Tenants/MangingMyBooking/ManageBookingLayout";
const articlePage = () => {
  const router = useRouter();
  console.log(router);
  const articleData = {
    title: "Extend my ongoing Booking",
    aurthorName: "Thomas H ",
    updateDate: "1 month ago",
    articleCount: "1 out of 5 found helpful",
    description:
      "SPOTAHOME was conceived to eliminate communication and language barriers between landlords and tenant from all parts of the world. SPOTAHOME was created to make the world your home. Therefore,SPOTAHOME is a community committed to guaranteeing the inclusion, safety, dignity and respect of all its users Real Estate Agents, Owners and Resident which work with us must comply at any time with SPOTAHOME Non Discrimination Policy. All our users deserve respect and SPOTAHOME shall not tolerate any behaviour that constitutes discrmination of any kind SPOTAHOME is a young Spanish company composed by people from all over the world. Likewise, since 2014, we have connected users of more than 70 different countries. By accepting SPOTAHOME’s Terms and Conditions, all users (Owners, Residents and professionals of the Real Estateundertake not to express any kind of discrimination regarding race, ethnicity, religion, gender, age, nationality sexual orientation or marital status against any person or group of people.Specific Guidance for Listings No advertisement shall contain any information or mention related to any preferencesin favour of or against Residents regarding race, ethnicity, religion, gender, age, nationality, sexual orientationor the behaviour of the user implies that the booking was rejected by said reasons,SPOTAHOME will take the necessary steps  to enforce this policy including the suspension of the user",
  };

  return (
    <div>
      <ManageBookingLayout articleData={articleData} />
    </div>
  );
};

export default articlePage;
