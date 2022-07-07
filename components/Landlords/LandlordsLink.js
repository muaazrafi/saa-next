import React from "react";
import Link from "next/link";

const LandlordsLink = ({ mainTitle, arrayLinks, href }) => {
  return (
    <>
      <div>
        <Link href={href}>
          <p className='textTenants'>{mainTitle}</p>
        </Link>
      </div>
      <div>
        {arrayLinks?.map((link) => {
          return (
            <div>
              <Link href={link.href}>{link.title}</Link>;
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LandlordsLink;
