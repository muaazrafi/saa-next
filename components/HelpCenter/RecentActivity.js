import { MessageOutlined } from "@ant-design/icons";
import React from "react";
import Link from "next/link";

export const RecentActivity = ({ title, subTitle, createdAt }) => {
  return (
    <div className='articles'>
      <Link href='#'>
        <p className='articlePara'>{title}</p>
      </Link>
      <Link href='#'>
        <p className='articleParagraph'>{subTitle}</p>
      </Link>
      <p className='Article-created'>
        {createdAt}
        <MessageOutlined style={{ marginLeft: "3px" }} />
      </p>
    </div>
  );
};
