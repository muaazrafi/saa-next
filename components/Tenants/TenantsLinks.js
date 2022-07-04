import React from "react";
import Link from "next/link";

const TenantsLinks = ({ title }) => {
  return (
    <div className='tenantslinks'>
      <Link href='#'>
        <p className='tenantsPara'>{title}</p>
      </Link>
    </div>
  );
};

export default TenantsLinks;
