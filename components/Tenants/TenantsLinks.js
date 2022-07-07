import React from "react";
import Link from "next/link";

const TenantsLinks = ({ mainTitle, arrayLinks, href }) => {
  return (
    <>
      <div className='contentTenant'>
        <Link href={href}>
          <p className='textTenants'>{mainTitle}</p>
        </Link>
      </div>

      {arrayLinks?.map((link) => {
        return (
          <div className='tenantsContent'>
            <Link href={link.href}>
              <p className='linkTenants'>{link.title}</p>
            </Link>
          </div>
        );
      })}
    </>
  );
};
export default TenantsLinks;
