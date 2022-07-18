import React from "react";
import Link from "next/link";

const MangingBookingsLink = ({ mainTitle, arrayLinks, showButton = true }) => {
  return (
    <div className='bookHeader'>
      <div className='page-header'>
        <p className='BookingHeading'>{mainTitle}</p>
        {showButton && (
          <div>
            <a className='followbtn'>follow</a>
          </div>
        )}
      </div>

      {arrayLinks?.map((link) => {
        return (
          <div className='bookinglinks'>
            <Link href={link.href}>
              <p className='BookingContent'>{link.title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MangingBookingsLink;
