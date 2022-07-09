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
    description:
      "We are glad to see that you are happy with your current apartment and wish to extend your stay.To place an extension, we simply ask you to place a new booking request and for that purpose, we offer you a 100% discount on our booking fee. ",
  };

  return (
    <div>
      <ManageBookingLayout articleData={articleData} />
    </div>
  );
};

export default articlePage;
