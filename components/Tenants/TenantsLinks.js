import React from "react";

import Link from "next/link";

const TenantsLinks = ({ mainTitle, href, links }) => {
  return (
    <>
      <div className='contentTenant'>
        <Link href={href}>
          <p className='textTenants'>{mainTitle}</p>
        </Link>
      </div>

      {links.map((link) => {
        return (
          <div className='tenantsContent'>
            <Link href={`/help/articles/${link.slug}`}>
              <p className='linkTenants'>{link.title}</p>
            </Link>
          </div>
        );
      })}
    </>
  );
};
export default TenantsLinks;
