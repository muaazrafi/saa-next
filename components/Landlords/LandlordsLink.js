import React from "react";
import Link from "next/link";

const LandlordsLink = ({ title }) => {
  return (
    <div className='landlordslinks'>
      <Link href='#'>
        <p className='landlordsPara'>{title}</p>
      </Link>
    </div>
  );
};

export default LandlordsLink;
