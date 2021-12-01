import React from 'react';
import Logo from 'components/UI/Logo/Logo';
import Footers from 'components/Footer/Footer';
import FooterMenu from './FooterMenu';

const Footer = ({ path }) => {
  return (
    <Footers
      path={path}
      logo={
        <Logo
          withLink
          linkTo="/"
          src="/images/logo-alt.svg"
          title=""
        />
      }
      menu={<FooterMenu />}
      copyright={`Copyright @ ${new Date().getFullYear()} SAA, Inc.`}
    />
  );
};

export default Footer;
