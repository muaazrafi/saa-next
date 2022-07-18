import React from "react";
import Link from "next/link";

const RelatedArticles = ({ arrayLinks }) => {
  return (
    <div>
      {arrayLinks?.map((link) => {
        return (
          <div>
            <Link href={link.href}>
              <p className='RelatedArticles'>{link.title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default RelatedArticles;
