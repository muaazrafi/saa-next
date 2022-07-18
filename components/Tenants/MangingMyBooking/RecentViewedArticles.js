import React from "react";
import Link from "next/link";
const RecentViewedArticles = ({ arrayLinks }) => {
  return (
    <div>
      {arrayLinks?.map((link) => {
        return (
          <div>
            <Link href={link.href}>
              <p className='RecentViewsArticle'>{link.title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default RecentViewedArticles;
