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
                <p>{link.title}</p>
              </Link>
              <Link href={link.subTitleHref}>
                <p>{link.subTitle}</p>
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
