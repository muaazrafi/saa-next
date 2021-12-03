import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';
import AccommodationPoliciesArea, { AccommodationPolicieswrapper } from './AccommodationPolicies.style';
import { Element } from 'react-scroll';


const AccommodationPolicies = ({
  titleStyle,
  titleStyleAP,
  detailstyle,
}) => {
  return (
    <Element name="AccommodationPolicies" className="AccommodationPolicies">
      
      <AccommodationPoliciesArea>
        <Heading as="h2" content="Accommodation Policies" {...titleStyleAP} />
        <AccommodationPolicieswrapper>
          <Heading as="span" content="Rent & Bills"{...titleStyle}/>
          <Text as="span" style={{ margin: '20px !important' }} content="Rent and utilities are due every 30 days.."
            {...detailstyle}/>
        </AccommodationPolicieswrapper>
        
        <AccommodationPolicieswrapper>
          <Heading as="span" content="Security Deposit"{...titleStyle}/>
          <Text as="span" style={{ margin: '20px !important' }} content="A €1600 security deposit is paid directly to your accommodation provider. In the event you move out earlier than expected or there are damages during your stay, the accommodation provider may keep a portion or all of the deposit."
            {...detailstyle}/>
        </AccommodationPolicieswrapper>
        
        <AccommodationPolicieswrapper>
          <Heading as="span" content="Rules"{...titleStyle}/>
          <Text as="span" style={{ margin: '20px !important' }} content="Respect of the apartment and the neighbors. No noises or parties between 8pm - 8am"
           {...detailstyle}/>
        </AccommodationPolicieswrapper>
        
        <AccommodationPolicieswrapper>
          <Heading as="span" content="Cancellation Policy"{...titleStyle}/>
          <Text as="span" style={{ margin: '20px !important' }} content="Moderate:  If a user cancels up to 60 days before move in date, there is a 50% refund for the payment on the first month rent payment. If the user cancels up to 30 days before move in date there is a 25% refund for the payment on the first month rent payment. If the user cancels under 30 days before move in date, there is no refund available for the payment on the first month rent payment."
            {...detailstyle}/>
        </AccommodationPolicieswrapper>
        <AccommodationPolicieswrapper>
          <Heading as="span" content="Contract Type"{...titleStyle}/>
          <Text as="span" style={{ margin: '20px !important' }} content="Pro-rated: Rent is calculated in proportion to the number of days of your stay. You will pay the monthly rent for each whole month that you book, but the first and last month you will simply pay for the days that you stay (like a hotel)"
            {...detailstyle}/>
        </AccommodationPolicieswrapper>
      </AccommodationPoliciesArea>
    </Element>
  );
};

AccommodationPolicies.propTypes = {
  titleStyle: PropTypes.object,
  titleStyleAP: PropTypes.object,
  detailstyle: PropTypes.object,
};

AccommodationPolicies.defaultProps = {

  titleStyleAP: {
    color: '#2C2C2C',
    marginBottom: '12px',
    fontSize: ['17px', '20px', '25px'],
    lineHeight: ['1.15', '1.2', '1.36'],
    mb: '4px',
  },
      
  detailstyle: {
    fontSize: '16px',
    textAlign: 'right',
    color: '#232323',
    position: 'absolute', 
    borderLeft: '#888 solid 1px',
    paddingLeft: '20px',
  },

  titleStyle: {
    fontSize: '20px',
    color: '#767676',
    fontWeight: '500',
    paddingLeft: '0px', 
    top: '0'
  },
 
  contentStyle: {
    fontSize: '15px',
    fontWeight: '400',
    color: '#2C2C2C',
    lineHeight: '1.6',
    mb: ['14px', '20px', '27px'],
  },

};

export default AccommodationPolicies;