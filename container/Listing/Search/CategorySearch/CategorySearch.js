import React, { useState,useContext,useEffect,Fragment,useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import { createBrowserHistory } from 'history';
import ViewWithPopup from 'components/UI/ViewWithPopup/ViewWithPopup';
import { Slider, Button, Checkbox,Input,Space } from 'antd';
import InputIncDec from 'components/UI/InputIncDec/InputIncDec';
import DateRangePickerBox from 'components/UI/DatePicker/ReactDates';
import { SearchContext } from 'context/SearchProvider';
import { setStateToUrl } from 'library/helpers/url-handler';
import {
  priceInit,
  calenderItem,
  getAmenities,
  getPropertyType,
} from '../SearchParams';
import CategroySearchWrapper, {
  RoomGuestWrapper,
  ItemWrapper,
  ActionWrapper,
} from './CategorySearch.style';


const { Search } = Input;

const history = process.browser ? createBrowserHistory() : false;
const location = process.browser && window.location;


const CategorySearchNext = (props) => {
  const { amenties } = useSelector(( state ) => state.apartments);
  const checkboxinput = useRef(null);
  let amenitiesLength = 0;
  var plainOptions=[];
  var amenties_object;
  
  useEffect(() => {
  }, [amenties]);
  
  var amenties_object = Object.values(amenties)[0];

  if (amenties_object){
    plainOptions  =  Object.keys(amenties_object).map((el) => el)
  }

  const onSearch_value = (e) => {
    const ament_name = e.target.value;
    var new_plain_option=[];
    plainOptions.forEach(function(name){
      if(name.charAt(0) == ament_name.charAt(0)){
        new_plain_option.push(name)
      }
    });
    console.log(new_plain_option);
    debugger
    // checkboxinput.current.__reactProps$f3tpqg6i7uf.children._owner.memoizedProps.options=new_plain_option
    
    checkboxinput.current.focus(); 
  };

  // componentDidUpdate(){
  //   this._checkbox.focus()
  // };  

  return (
    <CategroySearchWrapper>
      <ViewWithPopup className={amenitiesLength ? 'activated' : ''} key={getAmenities.id} noView={true}
        view={
          <Button type="default">
            {getAmenities.name}
          </Button>
        }
        popup={
        <Fragment>
          <Space direction="vertical">
            <Search placeholder="input search text" onChange={onSearch_value} style={{ width: '240px', marginBottom: '20px' }} />
          </Space>
          <Checkbox.Group style={{ height: '350px', overflow: 'auto' }}
           options={plainOptions}
           ref={checkboxinput}
          />
         </Fragment>
        }
      />  
    </CategroySearchWrapper>
  
  );
};

export default CategorySearchNext;


