import React from "react";
import Link from "next/link";

const MangingBookingsLink = ({ title }) => {
  return (
    <div>
      <div className='bookinglinks'>
        <Link href='#'>
          <p className='bookingPara'>{title}</p>
        </Link>
      </div>
    </div>
  );
};

export default MangingBookingsLink;
