import React from 'react';

const ApartmentCurrency = ({ currency }) => {
  const isoCurrency = {
    EUR: '€',
    USD: '$',
    GBP: '£',
    CZK: 'Kč'
  }
  
  return (
    <>{isoCurrency[currency]}</>
  )
}

export default ApartmentCurrency;