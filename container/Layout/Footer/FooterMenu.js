import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';

import {
  HOME_PAGE,
  LISTING_POSTS_PAGE,
  PRIVACY_PAGE,
  PRICING_PLAN_PAGE,
  AGENT_PROFILE_PAGE,
} from '../../../settings/constant';

const FooterMenu = () => {
  return (
    <Menu>
      <Menu.Item key="0">
        <Link href={`${HOME_PAGE}`}>
          <a>About Us</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link href={`${LISTING_POSTS_PAGE}`}>
          <a> How It Works</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link href={`${PRICING_PLAN_PAGE}`}>
          <a> Become a Rep</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link href={`${PRIVACY_PAGE}`}>
          <a> Blog</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link href={`${AGENT_PROFILE_PAGE}`}>
          <a>Terms of Service</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default FooterMenu;
