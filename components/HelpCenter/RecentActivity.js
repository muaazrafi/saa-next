import React from "react";
import Link from "next/link";

export const RecentActivity = ({ arrayLinks }) => {
  return (
    <>
      {arrayLinks?.map((link) => {
        return (
          <div className='articles'>
            <div>
              <Link href={link.titleHref}>
                <h3 className='recent-link'>{link.title}</h3>
              </Link>
              <Link href={link.subTitleHref}>
                <p className='recent-links'>{link.subTitle}</p>
              </Link>
            </div>
            <div className='createArticle'>
              <span>{link.createdAt}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};
