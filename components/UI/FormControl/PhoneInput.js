import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form } from "antd";
import IntlTelInput from "react-intl-tel-input";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import { setTempPhone } from 'store/authSlice';

const PhoneInput = ({label=false, form}) => {
  const dispatch = useDispatch();
  const [phoneNo, setPhoneNo] = useState(null);
  const [phoneNoCountry, setPhoneNoCountry] = useState(null);
  
  const handlePhoneChange = (status, phoneNumber, country) => {
    form.setFieldsValue({
      ['phone']: phoneNumber
    })
    setPhoneNo(phoneNumber);
    setPhoneNoCountry(country);
  };

  const validatePhone = (rule, value, callback) => {
    if (!phoneNoCountry && !phoneNo) {
      callback("Please input phone no.");
      return false;
    }

    const formatPhoneNumber = `+${phoneNoCountry.dialCode}${phoneNo}`;
    if (isValidPhoneNumber(formatPhoneNumber, phoneNoCountry.iso2)) {
      dispatch(setTempPhone(parsePhoneNumber(`+${phoneNoCountry.dialCode}${phoneNo}`).number));
      callback();
    } else {
      callback("Please enter valid phone no.");
    }
    return false;
  };

  return (
    <Form.Item
      name="phone"
      label={label}
      style={{ marginBottom: "10px" }}
      rules={[{ validator: validatePhone }]}
    >
      <IntlTelInput
        containerClassName="intl-tel-input"
        inputClassName="ant-input"
        onPhoneNumberChange={handlePhoneChange}
        format={true}
      />
    </Form.Item>
  );
};

export default PhoneInput;
