import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const HomeWrapper = styled.footer`


/*Responsive Breakpoints*/
/*Responsive Media Min Width*/
/*Bootstrap Media Max Width*/
 html, body {
	 padding: 0;
	 margin: 0;
	 font-family: "Poppins", sans-serif !important;
	 font-weight: 400 !important;
	 font-size: 14px !important;
	 height: 100%;
}
 a {
	 color: inherit;
	 text-decoration: none;
}
 * {
	 box-sizing: border-box;
}
 button {
	 display: flex !important;
	 justify-content: center;
	 align-items: center;
	 border-radius: 8px !important;
	 background-color: #06c1f2 !important;
	 border-color: #06c1f2 !important;
	 height: 38px !important;
}
 .colored_circle {
	 border-radius: 50%;
	 width: 36px;
	 height: 36px;
	 padding: 6px;
	 background: #06c1f2;
	 color: #fff;
	 text-align: center;
	 font-weight: 500;
	 font-size: 16px;
}
 .ant-btn-loading-icon {
	 display: none !important;
}
 .flex_area_center {
	 display: flex;
	 justify-content: center;
	 align-items: center;
}
 .text_center {
	 text-align: center;
}
 .padding_main {
	 padding: 80px 0;
}
 .ant-row {
	 align-items: center;
}
 .text_area h2 {
	 font-size: 24px;
	 font-weight: 500;
	 color: #414141;
	 margin-bottom: 25px;
	 line-height: 1.5;
}
 .text_area .heading_sm {
	 font-size: 18px;
}
 .text_area p {
	 color: #999;
}
 .headline_text {
	 margin-bottom: 50px;
	 text-align: center;
}
 .navbar_section {
	 border: 1px solid;
	 height: 70px;
}
 .banner_section {
	 background-image: url(https://studyabroadapartments.s3.amazonaws.com/assets/next/banner-home.jpg);
	 background-size: cover;
	 background-position: center;
	 background-repeat: no-repeat;
	 height: 70vh;
	 box-shadow: rgb(0 0 0 / 60%) 0px 0px 0px 2000px inset;
}
 .banner_section .col_inner {
	 height: 70vh;
}
 .banner_section .head_wrapper {
	 position: absolute;
	 top: 40%;
}
 .banner_section .head_wrapper h2 {
	 font-size: 36px;
	 font-weight: 500;
	 color: #fff;
}
 .banner_section .head_wrapper p {
	 padding-right: 15px;
	 color: #fff;
}
 .booking_section {
	 padding: 50px 0;
}
 .booking_section input {
	 border-top: none;
	 border-left: none;
	 border-right: none;
	 color: #414141;
}
 .booking_section input::placeholder {
	 color: #414141;
}
 .booking_section input:focus {
	 box-shadow: none !important;
}
 .destination_section {
	 min-height: 400px;
	 background-color: #f7fafb;
}
 .destination_section .img_div {
	 background-size: cover;
	 background-position: center;
	 background-repeat: no-repeat;
	 height: 330px;
	 border-radius: 15px;
	 position: relative;
}
 .destination_section .img_div div {
	 width: 100%;
	 padding: 35px 30px 25px;
	 font-size: 16px;
	 font-weight: 500;
	 color: #fff;
	 position: absolute;
	 bottom: 0;
	 left: 0;
	 background: linear-gradient(rgba(255, 0, 0, 0), #000);
	 border-radius: 15px;
}
 .destination_section .bg_one {
	 background-image: url(https://studyabroadapartments.s3.amazonaws.com/assets/next/barcelona.jpg);
}
 .destination_section .bg_two {
	 background-image: url(https://studyabroadapartments.s3.amazonaws.com/assets/next/madrid.jpg);
}
 .destination_section .green_area {
	 background-color: #06c1f2;
	 height: 250px;
	 text-align: center;
	 border-radius: 15px;
	 display: flex;
	 flex-direction: column;
	 align-items: center;
	 justify-content: center;
}
 .destination_section .green_area h2 {
	 font-size: 30px;
	 font-weight: 500;
	 color: #fff;
}
 .destination_section .green_area p {
	 color: #fff;
}
 .semester_section {
	 position: relative;
}
 @media (max-width: 576px) {
	 .semester_section {
		 padding-top: 40px;
	}
}
 .semester_section .img_div {
	 background-image: url(https://studyabroadapartments.s3.amazonaws.com/assets/next/capture.png);
	 background-size: cover;
	 background-position: center;
	 background-repeat: no-repeat;
	 height: 440px;
	 border-radius: 6px;
}
 @media (max-width: 576px) {
	 .semester_section .img_div {
		 height: 345px;
	}
}
 .semester_section .absolute_imgone {
	 position: absolute;
	 right: 45%;
}
 @media (max-width: 1200px) {
	 .semester_section .absolute_imgone {
		 display: none;
	}
}
 .semester_section .absolute_imgtwo {
	 position: absolute;
	 right: 65px;
	 bottom: 90px;
	 z-index: 1;
}
 @media (max-width: 1200px) {
	 .semester_section .absolute_imgtwo {
		 display: none;
	}
}
 .semester_section .absolute_imgthree {
	 position: absolute;
	 right: 0px;
	 bottom: 90px;
}
 @media (max-width: 1200px) {
	 .semester_section .absolute_imgthree {
		 display: none;
	}
}
 .semester_section .text_area {
	 padding-left: 50px;
}
 @media (max-width: 768px) {
	 .semester_section .text_area {
		 padding-left: 0;
	}
}
 .feature_section {
	 text-align: center;
}
 .feature_section .feature_inner .img_div {
	 position: relative;
}
 .feature_section .feature_inner .img_div .absolute_img {
	 position: absolute;
	 top: -19px;
	 left: 36%;
	 z-index: -1;
}
 @media (max-width: 1200px) {
	 .feature_section .feature_inner .img_div .absolute_img {
		 display: none;
	}
}
 .feature_section .feature_inner .text_area {
	 margin-top: 25px;
}
 .experience_section {
	 background-color: #f7fafb;
	 position: relative;
}
 .experience_section .absolute_imgone {
	 position: absolute;
	 top: 25px;
	 right: 0;
}
 @media (max-width: 1200px) {
	 .experience_section .absolute_imgone {
		 display: none;
	}
}
 .experience_section .absolute_imgtwo {
	 position: absolute;
	 top: 80px;
	 left: 0;
}
 @media (max-width: 1200px) {
	 .experience_section .absolute_imgtwo {
		 display: none;
	}
}
 .experience_section .absolute_imgthree {
	 position: absolute;
	 bottom: -10px;
	 right: -56px;
}
 @media (max-width: 1200px) {
	 .experience_section .absolute_imgthree {
		 display: none;
	}
}
 .experience_section .absolute_imgfour {
	 position: absolute;
	 bottom: -7px;
	 left: -126px;
}
 @media (max-width: 1200px) {
	 .experience_section .absolute_imgfour {
		 display: none;
	}
}
 .experience_section .img_div {
	 min-height: 225px;
	 position: relative;
}
 .experience_section .img_div div {
	 width: 100%;
	 padding: 35px 30px 30px;
	 font-size: 16px;
	 font-weight: 500;
	 color: #fff;
	 position: absolute;
	 bottom: 0;
	 left: 0;
	 border-radius: 15px;
}
 .work_section {
	 text-align: center;
	 background-color: #f7fafb;
	 padding-top: 0;
	 position: relative;
}
 .work_section .ant-row {
	 justify-content: center;
}
 .work_section .work_items {
	 padding: 50px 0 0 0;
}
 .work_section .min_h_361 {
	 min-height: 361px !important;
}
 .work_section .work_inner {
	 box-shadow: 2px 3px 3px 0px #000101 1a;
	 background: #fff;
	 padding: 30px;
	 border-radius: 15px;
	 position: relative;
	 min-height: 260px;
	 height: auto;
}
 .work_section .work_inner .img_width {
	 width: 100px;
	 overflow: hidden;
}
 .work_section .work_inner .absolute_imgone {
	 position: absolute;
	 bottom: -118px;
	 right: -109px;
}
 @media (max-width: 1200px) {
	 .work_section .work_inner .absolute_imgone {
		 display: none;
	}
}
 .work_section .work_inner .colored_circle {
	 position: absolute;
	 top: -18px;
}
 .work_section .work_inner .text_area {
	 margin-top: 25px;
}
 .work_section .absolute_imgtwo {
	 position: absolute;
	 bottom: 60px;
	 left: 0;
}
 @media (max-width: 1200px) {
	 .work_section .absolute_imgtwo {
		 display: none;
	}
}
 .work_section .absolute_imgthree {
	 position: absolute;
	 bottom: 100px;
	 right: 70px;
}
 @media (max-width: 1200px) {
	 .work_section .absolute_imgthree {
		 display: none;
	}
}
 .roommate_section {
	 position: relative;
}
 .roommate_section .text_area {
	 margin-bottom: 30px;
}
 .roommate_section .text_area h2 {
	 padding-right: 100px;
}
 @media (max-width: 768px) {
	 .roommate_section .text_area h2 {
		 padding-right: 0;
	}
}
 .roommate_section .absolute_imgone {
	 position: absolute;
	 top: 0;
	 left: -130px;
}
 @media (max-width: 1200px) {
	 .roommate_section .absolute_imgone {
		 display: none;
	}
}
 .roommate_section .absolute_imgtwo {
	 position: absolute;
	 bottom: 20px;
	 left: 20px;
}
 @media (max-width: 1200px) {
	 .roommate_section .absolute_imgtwo {
		 display: none;
	}
}
 .your_words_section {
	 padding-top: 0;
}
 .your_words_section .words_inner {
	 background: #f7fafb;
	 padding: 30px;
	 border-radius: 15px;
	 position: relative;
	 min-height: 277px;
	 height: auto;
}
 .your_words_section .words_inner .flex_area {
	 display: inline-flex;
	 align-items: center;
}
 .your_words_section .words_inner .name_div {
	 padding: 0px 15px;
	 margin-right: 15px;
	 border-right: 2px solid;
	 font-size: 14px;
	 line-height: 12px;
	 color: #414141;
}
 .your_words_section .words_inner .university_span {
	 color: #999;
	 display: block;
	 white-space: nowrap;
	 overflow: hidden;
	 text-overflow: ellipsis;
	 width: 205px;
}
 @media (max-width: 768px) {
	 .your_words_section .words_inner .university_span {
		 width: 170px;
	}
}
 .your_words_section .words_inner .text_area {
	 margin-top: 20px;
}
 .your_words_section .words_inner .text_area p {
	 font-style: italic;
	 color: #414141;
}
 .blogs_section {
	 background-color: #f7fafb;
}
 .blogs_section .img_div {
	 min-height: 220px;
	 position: relative;
}
 .blogs_section .img_div div {
	 width: 100%;
	 font-size: 16px;
	 font-weight: 500;
	 color: #fff;
	 border-radius: 15px;
}
 .blogs_section .img_div .div_postition {
	 position: absolute;
	 bottom: 0;
	 left: 0;
	 padding: 35px 30px 30px;
}
 .blogs_section .img_div .div_postition div:last-of-type {
	 font-size: 14px;
	 font-weight: 400;
	 display: flex;
	 align-items: center;
	 margin-top: 5px;
}
 .brands_section {
	 padding: 60px 0;
}
 .brands_section .img_div {
	 padding: 0 20px;
}
 @media (max-width: 768px) {
	 .brands_section .ant-row {
		 justify-content: center;
	}
}
 

.DateRangePicker{
  width: 100%;
  .DateRangePickerInput{
    width: 100%;
    .DateInput{
      width: 45%;
      .DateInput_input__focused{
        border-color: ${themeGet('primary.1', '#0088E5')};
      }

    }
  } 
}


`;

export default HomeWrapper;
