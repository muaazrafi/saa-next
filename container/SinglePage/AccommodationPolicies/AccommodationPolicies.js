import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';
import AccommodationPoliciesArea, { APWrapper } from './AccommodationPolicies.style';
import Map from 'components/Map/Map';
import { Element } from 'react-scroll';


const AccommodationPolicies = ({
  titleStyle,
  titleStyleAP,
  locationMetaStyle,
  contentStyle,
  boldContentStyle,
  linkStyle,
  location,
}) => {
  return (
    <Element name="AccommodationPolicies" className="AccommodationPolicies">
      <AccommodationPoliciesArea>
        <Heading as="h2" content="Accommodation Policies" {...titleStyleAP} />
          <Heading as="h2" content="Rent & Bills"{...titleStyle}/>
          <Text
            content="Rent and utilities are due every 30 days.."
            {...contentStyle}
          />
        <Heading as="h2" content="Security Deposit"{...titleStyle}/>
        <Text
          content="A €1600 security deposit is paid directly to your accommodation provider. In the event you move out earlier than expected or there are damages during your stay, the accommodation provider may keep a portion or all of the deposit."
          {...contentStyle}
        />

        <Heading as="h2" content="Rules"{...titleStyle}/>
        <Text
          content="Respect of the apartment and the neighbors. No noises or parties between 8pm - 8am"
          {...contentStyle}
        />
        
        <Heading as="h2" content="Cancellation Policy"{...titleStyle}/>
        <Text
          content="Moderate:  If a user cancels up to 60 days before move in date, there is a 50% refund for the payment on the first month rent payment. If the user cancels up to 30 days before move in date there is a 25% refund for the payment on the first month rent payment. If the user cancels under 30 days before move in date, there is no refund available for the payment on the first month rent payment."
          {...contentStyle}
        />
        
        <Heading as="h2" content="Contract Type"{...titleStyle}/>
        <Text
          content="Pro-rated: Rent is calculated in proportion to the number of days of your stay. You will pay the monthly rent for each whole month that you book, but the first and last month you will simply pay for the days that you stay (like a hotel)"
          {...contentStyle}
        />

      </AccommodationPoliciesArea>
    </Element>
  );
};

AccommodationPolicies.propTypes = {
  titleStyle: PropTypes.object,
  titleStyleAP: PropTypes.object,
  locationMetaStyle: PropTypes.object,
  contentStyle: PropTypes.object,
};

AccommodationPolicies.defaultProps = {
  titleStyleAP: {
    color: '#2C2C2C',
    fontSize: ['17px', '20px', '25px'],
    lineHeight: ['1.15', '1.2', '1.36'],
    mb: '4px',
  },
  titleStyle: {
    color: '#2C2C2C',
    fontSize: ['17px', '20px', '20px'],
    lineHeight: ['1.15', '1.2', '2.36'],
    mb: '4px',
  },
  locationMetaStyle: {
    fontSize: '13px',
    fontWeight: '400',
    color: '#909090',
    mb: ['14px', '20px', '27px'],
  },
  contentStyle: {
    fontSize: '15px',
    fontWeight: '400',
    color: '#2C2C2C',
    lineHeight: '1.6',
    mb: ['14px', '20px', '27px'],
  },
  boldContentStyle: {
    fontWeight: '700',
    mb: '0!important',
  },
  linkStyle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#0088E5',
  },
};

export default AccommodationPolicies;