import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const HomeWrapper = styled.footer`


/*Responsive Breakpoints*/
$xxlWidth: 1400px;
$xlWidth: 1200px;
$lgWidth: 992px;
$mdWidth: 768px;
$smWidth: 576px;

/*Responsive Media Min Width*/

@mixin xxl-up {
  @media (min-width: #{$xxlWidth}) {
    @content;
  }
}

@mixin xl-up {
  @media (min-width: #{$xlWidth}) {
    @content;
  }
}
@mixin lg-up {
  @media (min-width: #{$lgWidth}) {
    @content;
  }
}
@mixin md-up {
  @media (min-width: #{$mdWidth}) {
    @content;
  }
}
@mixin sm-up {
  @media (min-width: #{$smWidth}) {
    @content;
  }
}

/*Bootstrap Media Max Width*/

@mixin xxl-down {
  @media (max-width: #{$xxlWidth}) {
    @content;
  }
}

@mixin xl-down {
  @media (max-width: #{$xlWidth}) {
    @content;
  }
}
@mixin lg-down {
  @media (max-width: #{$lgWidth}) {
    @content;
  }
}
@mixin md-down {
  @media (max-width: #{$mdWidth}) {
    @content;
  }
}
@mixin sm-down {
  @media (max-width: #{$smWidth}) {
    @content;
  }
}

html,
body {
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

//Common styles Start

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
  color: #ffffff;
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

.text_area {
  h2 {
    font-size: 24px;
    font-weight: 500;
    color: #414141;
    margin-bottom: 25px;
    line-height: 1.5;
  }

  .heading_sm {
    font-size: 18px;
  }

  p {
    color: #999999;
  }
}

.headline_text {
  margin-bottom: 50px;
  text-align: center;
}

//Common styles End

.navbar_section {
  border: 1px solid;
  height: 70px;
}

//Banner section here

.banner_section {
  background-image: url(https://d1d0zx56gx2nys.cloudfront.net/assets/next/banner-home.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 70vh;
  box-shadow: inset 0 0 0 2000px rgb(0 0 0 / 60%);

  .col_inner {
    height: 70vh;
  }

  .head_wrapper {
    position: absolute;
    top: 40%;
    h2 {
      font-size: 36px;
      font-weight: 500;
      color: #ffffff;
    }

    p {
      padding-right: 15px;
      color: #ffffff;
    }
  }
}

//Booking section

.booking_section {
  padding: 50px 0;
  input {
    border-top: none;
    border-left: none;
    border-right: none;
    color: #414141;
    &::placeholder {
      color: #414141;
    }
    &:focus {
      box-shadow: none !important;
    }
  }
}

// Destination Section

.destination_section {
  min-height: 400px;
  background-color: #f7fafb;

  .img_div {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 330px;
    border-radius: 15px;
    position: relative;
    // box-shadow: inset 0 0 0 2000px rgb(0 0 0 / 54%);

    div {
      width: 100%;
      padding: 35px 30px 25px;
      font-size: 16px;
      font-weight: 500;
      color: #ffffff;
      position: absolute;
      bottom: 0;
      left: 0;
      background: linear-gradient(rgba(255, 0, 0, 0), rgb(0 0 0 / 86%));
      border-radius: 15px;
    }
  }

  .bg_one {
    background-image: url(https://d1d0zx56gx2nys.cloudfront.net/assets/next/barcelona.jpg);
  }

  .bg_two {
    background-image: url(https://d1d0zx56gx2nys.cloudfront.net/assets/next/madrid.jpg);
  }

  .green_area {
    background-color: #06c1f2;
    height: 250px;
    text-align: center;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 30px;
      font-weight: 500;
      color: #ffffff;
    }

    p {
      color: #ffffff;
    }
  }
}

//Semester Section

.semester_section {
  position: relative;
@include sm-down {
  padding-top: 40px;
}
  
  .img_div {
    background-image: url(https://d1d0zx56gx2nys.cloudfront.net/assets/next/capture.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 440px;
    border-radius: 6px;

    @include sm-down {
      height: 345px;
    }
  }

  .absolute_imgone {
    position: absolute;
    right: 45%;
    @include xl-down {
      display: none;
    }
  }

  .absolute_imgtwo {
    position: absolute;
    right: 65px;
    bottom: 90px;
    z-index: 1;
    @include xl-down {
      display: none;
    }
  }

  .absolute_imgthree {
    position: absolute;
    right: 0px;
    bottom: 90px;
    @include xl-down {
      display: none;
    }
  }

  .text_area {
    padding-left: 50px;
    @include md-down {
      padding-left: 0;
    }
  }
}

//Feature Section

.feature_section {
  text-align: center;

  .feature_inner {
    .img_div {
      position: relative;

      .absolute_img {
        position: absolute;
        top: -19px;
        left: 36%;
        z-index: -1; 
        @include xl-down {
          display: none;
        }
      }
    }


    .text_area {
      margin-top: 25px;
    }
  }
}

//Experience Section

.experience_section {
  background-color: #f7fafb;
  position: relative;

  .absolute_imgone {
    position: absolute;
    top: 25px;
    right: 0;

    @include xl-down {
      display: none;
    }
  }

  .absolute_imgtwo {
    position: absolute;
    top: 80px;
    left: 0;

    @include xl-down {
      display: none;
    }
  }

  .absolute_imgthree {
    position: absolute;
    bottom: -10px;
    right: -56px;

    @include xl-down {
      display: none;
    }
  }

  .absolute_imgfour {
    position: absolute;
    bottom: -7px;
    left: -126px;

    @include xl-down {
      display: none;
    }
  }

  .img_div {
    min-height: 225px;
    position: relative;

    div {
      width: 100%;
      padding: 35px 30px 30px;
      font-size: 16px;
      font-weight: 500;
      color: #ffffff;
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 15px;
    }
  }
}

//How it works Section

.work_section {
  text-align: center;
  background-color: #f7fafb;
  padding-top: 0;
  position: relative;

  .ant-row {
    justify-content: center;
  }

  .work_items {
    padding: 50px 0 0 0;
    // height: 50px;

    // img {
    //   width: 45px !important;
    // }
  }

  .min_h_361 {
    min-height: 361px !important;
  }

  .work_inner {
    box-shadow: 2px 3px 3px 0px #0001011a;
    background: #ffffff;
    padding: 30px;
    border-radius: 15px;
    position: relative;
    min-height: 260px;
    height: auto;

    .img_width {
      width: 100px;
      overflow: hidden;
    }

    .absolute_imgone {
      position: absolute;
      bottom: -118px;
      right: -109px;
  
      @include xl-down {
        display: none;
      }
    }

    .colored_circle {
      position: absolute;
      top: -18px;
    }

    .text_area {
      margin-top: 25px;
    }
  }

  .absolute_imgtwo {
    position: absolute;
    bottom: 60px;
    left: 0;

    @include xl-down {
      display: none;
    }
  }

  .absolute_imgthree {
    position: absolute;
    bottom: 100px;
    right: 70px;

    @include xl-down {
      display: none;
    }
  }
}

//Roommate Section

.roommate_section {
  position: relative;
  .text_area {
    margin-bottom: 30px;
    h2 {
      padding-right: 100px;
      @include md-down {
        padding-right: 0;
      }
    }
  }

  .absolute_imgone {
    position: absolute;
    top: 0;
    left: -130px;

    @include xl-down {
      display: none;
    }
  }

  .absolute_imgtwo {
    position: absolute;
    bottom: 20px;
    left: 20px;

    @include xl-down {
      display: none;
    }
  }
}

//Words Section

.your_words_section {
  padding-top: 0;

  .words_inner {
    background: #f7fafb;
    padding: 30px;
    border-radius: 15px;
    position: relative;
    min-height: 277px;
    height: auto;

    .flex_area {
      display: inline-flex;
      align-items: center;
    }

    .name_div {
      padding: 0px 15px;
      margin-right: 15px;
      border-right: 2px solid;
      font-size: 14px;
      line-height: 12px;
      color: #414141;
    }

    .university_span {
      color: #999999;
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 205px;
      @include md-down {
        width: 170px;
      }
    }

    .text_area {
      margin-top: 20px;

      p {
        font-style: italic;
        color: #414141;
      }
    }
  }
}

//Blogs Section

.blogs_section {
  background-color: #f7fafb;

  .img_div {
    min-height: 220px;
    position: relative;

    div {
      width: 100%;
      font-size: 16px;
      font-weight: 500;
      color: #ffffff;
      border-radius: 15px;
    }

    .div_postition {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 35px 30px 30px;

      & div:last-of-type {
        font-size: 14px;
        font-weight: 400;
        display: flex;
        align-items: center;
        margin-top: 5px;
      }
    }
  }
}

//Brands Section

.brands_section {
  padding: 60px 0;

  .img_div {
    padding: 0 20px;
  }

  .ant-row {
    @include md-down {
      justify-content: center;
    }
  }
}

`;

export default HomeWrapper;
