import { React } from 'react';
import { withRouter } from 'next/router';
import { Menu } from 'antd';
import ActiveLink from 'library/helpers/activeLink';

import {
  HOME_PAGE,
  LISTING_POSTS_PAGE,
} from 'settings/constant';

const MainMenu = ( { className, router } ) => {
  return (
  <>      
    <Menu className={className}>
      <Menu.Item key="0">
        <ActiveLink
          className={router.pathname === HOME_PAGE ? 'active' : ''}
          href={`${HOME_PAGE}`}
        >
           Become a Rep 
        </ActiveLink>
      </Menu.Item>
     

      <Menu.Item key="1">
        <ActiveLink
          className={router.pathname === LISTING_POSTS_PAGE ? 'active' : ''}
          href={`${LISTING_POSTS_PAGE}`}
        >
           List a property
        </ActiveLink>
      </Menu.Item>
    </Menu>
  </>

  );
};

export default withRouter(MainMenu);
