import React from 'react';
import { useSelector } from 'react-redux';

const ApartmentCurrency = () => {
  const { apartment } = useSelector( (state) => state.apartment );
  const isoCurrency = {
    EUR: '€',
    USD: '$',
    GBP: '£',
    CZK: 'Kč'
  }
  
  return (
    <>{apartment && isoCurrency[apartment.currency]}</>
  )
}

export default ApartmentCurrency;