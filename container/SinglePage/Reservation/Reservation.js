import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Card from 'components/UI/Card/Card';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';
import RenderReservationForm from './RenderReservationForm';

const CardHeader = ({ priceStyle, pricePeriodStyle, linkStyle }) => {
  return (
    <>
      <Heading
        content={
          <>
            $162 <Text as="span" content="/ monthy" {...pricePeriodStyle} />
          </>
        }
        {...priceStyle}
      />
      <Link href="/#1">
        <a style={{ ...linkStyle }}>Contact Us</a>
      </Link>
    </>
  );
};

export default function Reservation({ linkStyle }) {
  return (
    <Card
      className="reservation_sidebar"
      header={<CardHeader />}
      content={<RenderReservationForm />}
      footer={
        <p>
          Special offers available.
          <Link href="/#1">
            <a style={{ ...linkStyle }}>See details</a>
          </Link>
        </p>
      }
    />
  );
}

CardHeader.propTypes = {
  priceStyle: PropTypes.object,
  pricePeriodStyle: PropTypes.object,
  linkStyle: PropTypes.object,
};

CardHeader.defaultProps = {
  priceStyle: {
    color: '#2C2C2C',
    fontSize: '25px',
    fontWeight: '700',
  },
  pricePeriodStyle: {
    fontSize: '15px',
    fontWeight: '400',
  },
  linkStyle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#0088E5',
  },
};
