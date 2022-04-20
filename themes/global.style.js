import { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

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

  * {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ::selection {
    background: ${themeGet('primary.0', '#0088E5')};
    color: ${themeGet('color.1', '#ffffff')};
  }

  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  html,
  html a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  dl,
  th,
  dt,
  input,
  textarea,
  span,
  div {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Lato', sans-serif;
    -webkit-tap-highlight-color: transparent;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .sticky-white-bg{
    padding: 10px;
    background: #fff !important;
    border-bottom: 1px solid  #E6E6E6;
  }

  #__next {
    > .ant-layout {
      min-height: 100vh;
      overflow: hidden;
      background-color: ${themeGet('color.1', '#ffffff')};

      /* hotel submission style  */ 
      .hotel-submission-form {
        .ant-progress-outer {
          position: fixed;
          z-index: 9;
          left: 0;
          top: auto;
        }
        .gm-style {
          > input[type="text"] {
            left: 9px !important;
            top: 46px !important;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
        .hotel-form-location {
          .ant-card-head-title {
            font-size: 15px;
            line-height: 18px;
            font-weight: 700;
            color: ${themeGet('text.0', '#2C2C2C')};
          }
          .ant-card-body p {
            display: flex;
            color: ${themeGet('text.2', '#777777')};
            justify-content: flex-start;
            strong {
              color: ${themeGet('text.0', '#2C2C2C')};
              width: 30%;
            }
          }
        }
      }
    }
  }

  /*------------------------------------------*/ 
  // style for navbar profile / account menu
  /*------------------------------------------*/
  .ant-popover {
    &.profile_menu {
      z-index: 9999;
    }
    .ant-popover-content {
      .ant-popover-inner {
        .ant-popover-inner-content {
          ul.ant-menu  {
            border: 0;
            &.account_menu {
              li {
                color: ${themeGet('text.0', '#2C2C2C')};
                font-size: 15px;
                line-height: 18px;
                font-weight: 400;
                height: auto;
                transition: color 0.2s ease-in-out;
                &.ant-menu-item-selected,
                &.ant-menu-item-active {
                  background-color: transparent;
                }
                a {
                  padding: 8px 0;
                  color: ${themeGet('text.0', '#2C2C2C')};
                  transition: color 0.2s ease-in-out;
                  &:hover {
                    color: ${themeGet('primary.0', '#0088E5')};
                  }
                  &.active {
                    font-weight: 700;
                    color: ${themeGet('primary.0', '#0088E5')};
                  }
                }
                button {
                  padding: 0;
                  border: 0;
                  cursor: pointer;
                  padding: 8px 0;
                  background-color: transparent;
                  transition: color 0.2s ease-in-out;
                  &:hover {
                    color: ${themeGet('primary.0', '#0088E5')};
                  }
                  &:focus {
                    outline: none;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  /*------------------------------------------*/ 
  // style for date range picker
  /*------------------------------------------*/
  .DateRangePicker {
    .DateRangePickerInput {
      .DateRangePicker_picker {
        .DayPicker_weekHeader {
          .DayPicker_weekHeader_ul {
            .DayPicker_weekHeader_li {
              color: ${themeGet('text.0', '#2C2C2C')};
              small {
                font-size: 13px;
              }
            }
          }
        }
        .DayPicker_focusRegion {
          .CalendarMonthGrid {
            .CalendarMonth {
              .CalendarMonth_caption {
                font-size: 16px;
                color: ${themeGet('text.0', '#2C2C2C')};
              }
            }
          }
        }
        .DayPickerNavigation {
          .DayPickerNavigation_button {
            &:focus {
              outline: none;
            }
          }
        }
        .DayPickerKeyboardShortcuts_buttonReset {
          &:focus {
            outline: none;
          }
        }
      }
    }
  }

  .CalendarDay__selected, .CalendarDay__selected:active, .CalendarDay__selected:hover{
    background: #0088E5 !important;
    border: 1px double #0088E5 !important;
  }

  .CalendarDay__selected_span {
    background: #0088e587 !important;
    border: 1px double #0088e587 !important;
    color: #fff !important;
  }

  .CalendarDay__hovered_span, .CalendarDay__hovered_span:hover{
    background: #0088e587 !important;
    border: 1px double #0088e587 !important;
  }

  /*------------------------------------------*/ 
  // style for ant tooltip
  /*------------------------------------------*/
  .ant-tooltip {
    font-size: 13px;
    font-weight: 700;
    .ant-tooltip-inner {
      box-shadow: none;
      text-align: center;
      border-radius: 3px;
      min-height: 26px;
      padding: 4px 10px;
    }
  }

  .popoverCheckBox{
    .ant-checkbox-group-item{
      display: flex;
      padding-bottom: 5px;
      font-size: 15px;
    }
  }

  /*------------------------------------------*/ 
  // style for dropdown
  /*------------------------------------------*/
  .ant-select-dropdown {
    .ant-select-dropdown-menu {
      .ant-select-dropdown-menu-item {
        padding: 12px 12px;
        line-height: 1;
        &.ant-select-dropdown-menu-item-active {
          background-color: rgba(0, 132, 137, 0.1);
        }
      }
    }
  }

  /*------------------------------------------*/ 
  // here fix height issue for RoomGuest 
  /*------------------------------------------*/
  .view_with__popup {
    &.room_guest__component {
      &.active {
        min-height: 54px;
      }
      &.alt {
        .popup_container {
          #popup {
            > div {
              > div {
                padding: 0;
              }
            }
          }
        }
        &.active {
          min-height: inherit;
        }
      }
    }
  }

  /*------------------------------------------*/ 
  // ant dropdown and social share menu style 
  /*------------------------------------------*/
  .ant-dropdown {
    &.social_share_menu {
      z-index: 9999 !important;
      
      .ant-menu {
        padding: 7px 0;
        min-width: 150px;
        border: 0;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    
        .ant-menu-item {
          margin: 0;
          padding: 0;
          height: inherit;
          line-height: inherit;
          > div {
            padding: 15px 20px;
            color: ${themeGet('text.0', '#2C2C2C')};
            svg {
              margin-right: 8px;
            }
          }

          &:hover {
            background-color: ${themeGet('color.2', '#F7F7F7')};
          }
        }
      }
    }
  }

  /*------------------------------------------*/ 
  // ant modal and drawer style 
  /*------------------------------------------*/
  .ant-drawer,
  .ant-modal-mask,
  .ant-modal-wrap  {
    z-index: 1500 !important;
  }
  .ant-drawer {
    &.filter_drawer {
      pointer-events: none;
      .ant-drawer-mask {
        display: none;
      }
      &.ant-drawer-bottom {
        &.ant-drawer-open {
          .ant-drawer-content-wrapper {
            box-shadow: none;
          }
        }
      }
      .ant-drawer-content-wrapper {
        height: calc(100vh - 152px) !important;
        pointer-events: all;
        .ant-drawer-wrapper-body {
          height: 100%;
          .ant-drawer-body {
            height: 100%;
            padding-top: 0;
            overflow: hidden;
          }
        }
      }
    }
  }

  .ant-modal-wrap {
    .ant-modal-content {
      box-shadow: 0 1px 10px rgba(0,0,0,0.16);
    }
    &.review_modal {
      .ant-modal {
        max-width: 1170px;
        box-sizing: border-box;
        @media only screen and (max-width: 1260px) {
          padding-left: 30px;
          padding-right: 30px;
        }
        @media only screen and (max-width: 767px) {
          top: 0;
          padding: 0;
          margin-top: 0;
          margin-bottom: 0;
        }
        .ant-modal-body {
          padding-left: 60px;
          padding-right: 60px;
          padding-bottom: 60px;
          padding-top: 30px;
          @media only screen and (max-width: 1260px) {
            padding: 40px 30px;
          }
        }
      }
      .image_uploader{
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        @media only screen and (max-width: 667px) {
          flex-wrap: wrap;
        }
        .ant-upload{
          @media only screen and (max-width: 667px) {
            margin-bottom: 10px;
          }
          &.ant-upload-drag{
            border: 0;
            border-radius: 0;
            background: transparent;
            .ant-upload{
              padding: 0;
              display: block;
              width: auto;
              height:auto;
            }
          }
          &.ant-upload-drag-hover{
            .image-drag-area{
              border-color: #48bdc1;
            }
          }
        }
        .ant-upload-list{
          float: none;
          display: flex;
          .ant-upload-list-item{
            width: 125px;
            height: 125px;
            border-radius: 3px;
          }
        }
        .ant-upload-drag-container{
          display: block;
        }
      }
    }
  }

  /*------------------------------------------*/ 
  // map info window style 
  /*------------------------------------------*/
  .gm-style-iw-c {
    box-shadow: none !important;
  }
  .gm-style-iw {
    padding: 0 !important;
    border-radius: 3px !important;
    width: 270px !important;
    z-index: 1;
    .gm-style-iw-d {
      overflow-y: auto !important;
      overflow-x: hidden !important;
      max-width: 100% !important;
    }
    .info_window_card {
      width: 270px;
      margin-bottom: 0;
      > div {
        > img {
          width: 100%;
          height: 190px;
          object-fit: cover;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
      }
      .content_wrapper {
        > div + div {
          margin-top: 2px;
          margin-bottom: 4px;
        }
        .meta_wrapper {
          .rating {
            margin-top: 5px;
          }
        }
      }
    }
    button[title="Close"].gm-ui-hover-effect {
      width: 26px !important;
      height: 26px !important;
      padding: 6px !important;
      border-radius: 50%;
      margin: 0 !important;
      top: 14px !important;
      right: 11px !important;
      opacity: 1;
      align-items: center;
      display: inline-flex !important;
      background-color: ${themeGet('color.1', '#ffffff')} !important;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16);
      > img {
        margin: 0 !important;
      }
    }
  }

/*------------------------------------------*/
// Image Gallery Modal style
/*------------------------------------------*/
.ant-modal-wrap {
  &.image_gallery_modal {
    .ant-modal {
      top: 50px;
      .ant-modal-content{
        box-shadow: none;
        padding: 0 30px;
        background: transparent;
        @media only screen and (max-width: 480px) {
          padding: 0 20px;
        }
        .ant-modal-body {
          max-width: 1170px;
          padding: 0;
          margin: 0 auto; 
          @media only screen and (max-width: 1440px) {
            position: relative;
          }
        }
      }
      .image_gallery_close {
        background: transparent;
        border: 0;
        width: 60px;
        height: 60px;
        position: absolute;
        top: -20px;
        right: 40px;
        &:focus,
        &:hover {
          outline: none;
        }
        @media only screen and (max-width: 1440px) {
          top: 0;
          right: 0;
          svg {
            path {
              opacity: 0.8;
              fill: ${themeGet('color.1', '#ffffff')};
              transition: all 0.3s ease;
            }
          }
          &:hover {
            svg {
              path {
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }
}

/*------------------------------------------*/ 
// style for Increment Decrement Component
/*------------------------------------------*/
.quantity {
  button.btn {
    border: 1px solid ${themeGet('primary.0', '#0088E5')};
    svg {
      fill: ${themeGet('primary.0', '#0088E5')};
    }
    &:hover {
      background-color: ${themeGet('primary.0', '#0088E5')};
      svg {
        fill: #ffffff;
      }
    }
  }
  input[type="number"],
  input[type="number"].qnt-input {
    color: ${themeGet('text.0', '#2C2C2C')};
  }
}

/*------------------------------------------*/ 
// style for mobile Header Component
/*------------------------------------------*/
.mobile-header {
  &.ant-drawer {
    z-index: 10000;
  }
  .ant-drawer-body {
    padding: 0;
    .auth-menu {
      border: 0;
      display: flex;
      margin: 0 0 30px;
      padding: 25px 20px;
      align-items: center;
      background-color: ${themeGet('color.2', '#F7F7F7')};
      li {
        height: auto;
        line-height: 1;
        padding: 0;
        margin: 0;
        &.ant-menu-item-selected,
        &.ant-menu-item-active {
          background-color: transparent;
        }
        a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 15px;
          border-radius: 3px;
          font-size: 15px;
          font-weight: 700;
          color: ${themeGet('text.0', '#2C2C2C')};
        }
        &:last-child {
          a {
            color: ${themeGet('color.1', '#ffffff')};
            background-color: ${themeGet('primary.0', '#0088E5')};
            transition: opacity 0.2s ease;
            &:hover {
              opacity: 0.9;
            }
          }
        }
      }
    }
    .main-menu {
      border: 0;
      padding-top: 30px;
      li {
        padding: 0;
        &.ant-menu-item-selected,
        &.ant-menu-item-active {
          background-color: transparent;
        }
        a {
          font-size: 15px;
          padding: 0 31px;
          border-left: 4px solid transparent;
          color: ${themeGet('text.0', '#2C2C2C')};
          &.active {
            font-weight: 700;
            border-color: ${themeGet('primary.0', '#0088E5')};
            color: ${themeGet('primary.0', '#0088E5')};
          }
        }
        button {
          display: block;
          text-align: left;
          width: 100%;
          border: 0;
          padding: 0 32px;
          cursor: pointer;
          background-color: transparent;
          color: ${themeGet('text.0', '#2C2C2C')};
          transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
          &:hover {
            color: ${themeGet('primary.0', '#0088E5')};
          }
          &focus {
            outline: 0;
          }
        }
        &:hover {
          a {
            color: ${themeGet('primary.0', '#0088E5')};
          }
        }
      }
    }
  }
}

/*------------------------------------------*/ 
// style for google map dropdown
/*------------------------------------------*/
.pac-container {
  border: 0;
  z-index: 99999;
  padding: 5px 0;
  margin-top: 0;
  border-radius: 3px;
  box-shadow: 0 15px 46px -10px rgba(26, 26, 29, 0.3);
  @media only screen and (max-width: 991px) {
    margin-top: 0;
  }
  &::after {
    display: none;
  }
  .pac-item {
    border-top: 0;
    line-height: 30px;
    padding: 10px 14px;
    cursor: pointer;
    font-size: 13px;
    color: ${themeGet('text.1', '#909090')};
    .pac-icon {
      margin-top: 6px;
    }
    .pac-item-query {
      font-size: 15px;
      font-weight: 600;
      color: ${themeGet('text.0', '#2C2C2C')};  
      .pac-matched {
        font-weight: 700;
        color: ${themeGet('color.0', '#000000')};
      }
    } 
    &:hover {
      background-color: ${themeGet('color.2', '#F7F7F7')};
    }
  }
}

/*------------------------------------------*/ 
// style for reservation form
/*------------------------------------------*/
.reservation_modal {
  .ant-modal {
    width: 100% !important;
    max-width: 450px;
    padding: 0 15px;
  }
  .ant-modal-content {
    box-shadow: none;
    .ant-modal-body {
      padding: 0;
      position: relative;
      .reservation_sidebar {
        box-shadow: 0 1px 10px rgba(0,0,0,0.16);
        header {
          padding-top: 50px;
          padding-bottom: 20px;
          border-color: ${themeGet('border.0', '#EBEBEB')};
          @media only screen and (max-width: 375px) {
            padding-top: 30px;
          }
        }
        .DateInput__small {
          width: 112px;
        }
        input,
        .DateRangePickerInput {
          padding: 0 9px;
        }
        footer {
          border-color: ${themeGet('border.0', '#EBEBEB')};
        }
      }
      > button.close {
        border: 0;
        padding: 0;
        top: 15px;
        right: 15px;
        height: auto;
        line-height: 1;
        position: absolute;
        font-size: 32px;
        background-color: transparent;
        color: ${themeGet('text.1', '#909090')};
        transition: all 0.3s ease;
        @media only screen and (max-width: 375px) {
          top: 10px;
          right: 10px;
          font-size: 25px;
        }
        &:hover,
        &:focus {
          outline: none;
          color: ${themeGet('text.0', '#2C2C2C')};
        }
        &::after {
          display: none;
        }
      }
    }
  }
}

.reservation_sidebar {
  padding: 0 !important;
  background-color: ${themeGet('color.1', '#ffffff')};
  header {
    padding-bottom: 27px;
    margin-bottom: 29px;
    padding: 25px 30px 26px 30px;
    border-bottom: 1px solid ${themeGet('border.0', '#EBEBEB')};
    @media only screen and (max-width: 375px) {
      padding: 25px 15px 26px 15px;
    }
    a {
      &:hover {
        color: #31b8bd;
      }
    }
  }

  p {
    color: ${themeGet('text.0', '#2C2C2C')};
    font-size: 15px;
    font-weight: 400;
    a {
      color: ${themeGet('primary.0', '#0088E5')};
      font-weight: 700;
      &:hover,
      &:focus {
        outline: 0;
        color: #0088E5d1;
        text-decoration: underline;
      }
    }
  }

  footer {
    padding: 25px 30px 28px 30px;
    margin-top: 29px;
    border-top: 1px solid ${themeGet('border.0', '#EBEBEB')};
    @media only screen and (max-width: 375px) {
      padding: 20px 15px 25px 15px;
    }

    p {
      margin-bottom: 0;
    }
  }
}

.grid_column .placeholder {
  max-width: 100%;
}

.ant-input-affix-wrapper {
  border-radius: 3px;
  border-color: ${themeGet('border.3', '#E6E6E6')};
}

.ant-input-search-icon::before {
  border-color: ${themeGet('border.3', '#E6E6E6')};
}

.ant-checkbox-wrapper:hover .ant-checkbox-inner, 
.ant-checkbox:hover .ant-checkbox-inner, 
.ant-checkbox-input:focus + .ant-checkbox-inner,
.ant-checkbox-checked::after {
  border-color: ${themeGet('primary.0', '#0088E5')} !important;
}

@media all and (max-width: 720px) {
  .hide-on-sm {
   display: none !important;
   }
 }
 
 .more-filters-modal{
   top: 0px;
   margin: 0px;
   width: 100%;
   max-width: 100%;
   padding-bottom: 0px;
 }


 /* Make clicks pass-through */
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: #29d;

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 2px;
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px #29d, 0 0 5px #29d;
  opacity: 1.0;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 15px;
  right: 15px;
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color: #29d;
  border-left-color: #29d;
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes nprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.iti-flag{
  background-image: url('https://patw0929.github.io/react-intl-tel-input/img/flags.png');
}

.intl-tel-input{
  input[type=tel]{
    width: 256px;
  }
}

.StripeElement--webkit-autofill {
  background: transparent !important;
}

.StripeElement {
  width: 100%;
  padding: 6px 11px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  height: 32px;
}

.StripeElement--focus {
  border-color: #40a9ff;
  border-right-width: 1px !important;
  box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
}


.stripe-form {
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  margin-top: 10em;
}
.ant-notification{
  z-index: 999999;  
}
.ant-tooltip{
  z-index: 999999;
}

.thankyou-holder {
  background-image: url(https://d1d0zx56gx2nys.cloudfront.net/assets/thankyou-bg-pattren.png);
  background-repeat: repeat-x;
  background-position: left top;
  margin-bottom: 100px;
  .thankyou-title {
    background-image: url(https://d1d0zx56gx2nys.cloudfront.net/assets/Request-is-pending-for-approval-01.png);
    background-repeat: no-repeat;
    background-position: center center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px;
    height: 280px;
    margin-bottom: 15px;
  }
  @media (max-width: 670px) {
    .thankyou-title {
      background-size: 1300px 280px;
    }
  }
  @media (max-width: 480px) {
    .thankyou-title {
      background-size: 900px 280px;
    }
  }
}

.center-stage {
  flex: 1;
  max-width: 1050px;
  width: 100%;
  margin: 10px auto 104px;
  @media (max-width: 1050px) {
    padding: 0 30px;
  }
  @media (max-width: 480px) {
    margin-top: 10px;
  }
}

.thank-para {
  color: #949494;
  font-size: 18px;
  font-family: "Helvetica";
  text-align: center;
}

.referral-link{
  color: #55ACEE;
  font-family: monospace;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
}

}

.cardholder {
  .ant-col {
    display: flex;
    .ant-card {
      flex: 1;
      width: 100%;
    }
  }
}

.referralLinkAlert{
  margin-bottom: 15px;
  .ant-alert-message{
    font-size: 14px;
  }
  .ant-alert-description{
    font-size: 18px;
    font-weight: bold;    
  }
}

.mb-imp-5 {
  margin-bottom: 5px !important;
}

.text-right {
  text-align: right;
}

.ant-btn-warning{
  background-color: #FD9A01;
  border-color: #ed9205;
  color: #fff;
  &:hover {
    background-color: #fd9a01a6;
    color: #fff;
    border-color: #ed9205b0;
  }
  &:focus {
    background-color: #FD9A01;
    border-color: #ed9205;
    color: #fff;
  }
}

.banner-vsual {
  background: url(https://d1d0zx56gx2nys.cloudfront.net/assets/next/thankyou-min.jpg) 0px 0px no-repeat;
  background-size: cover;
  height: 90vh;
  .banner-overlay {
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fbf7f754);
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 100;
  }
  .banner-content-holder {
    position: absolute;
    top: 40%;
    left: 0px;
    width: 100%;
    transform: translate(0, -40%);
    z-index: 200;
    .banner-content {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 20px;
      h1 {
        font-family: 'Cabin', sans-serif;
        font-size: 50px;
        font-weight: bold;
        color: #ffffff;
        margin: 0px;
        padding: 0 0 35px;
        text-shadow: 2px 2px 2px #000000;
      }
    }
  }
}


.guest-selector{
  width: 60px;

  .ant-select-selector{
    padding-top: 8px !important;
    height: 50px !important;
  }
}

.overflow-it{
  overflow-x: auto;
}

.gm-style-iw-c {
  max-height: inherit !important;
}

.gm-style-iw-d{
  max-height: inherit !important;
}

.container{
  position:relative;
  margin-left:auto;
  margin-right:auto;
  padding-right:15px;
  padding-left:15px
}
@media (min-width: 476px){
  .container{
    padding-right:15px;
    padding-left:15px
  }
}
@media (min-width: 768px){
  .container{
    padding-right:15px;
    padding-left:15px
  }
}
@media (min-width: 992px){
  .container{
    padding-right:15px;
    padding-left:15px
  }
}
@media (min-width: 1200px){
  .container{
    padding-right:15px;
    padding-left:15px
  }
}
@media (min-width: 476px){
  .container{
    width:100%
  }
}
@media (min-width: 768px){
  .container{
    width:720px;
    max-width:100%
  }
}
@media (min-width: 992px){
  .container{
    width:960px;
    max-width:100%
  }
}
@media (min-width: 1200px){
  .container{
    width:1140px;
    max-width:100%
  }
}
@media (min-width: 1400px){
  .container{
    width:1340px;
    max-width:100%
  }
}

.ant-card-head {
  background: #fafafa;
}

.strike-through{
  text-decoration: line-through;
  .ant-steps-item-title {
    text-decoration: line-through;    
  }
}

.invite-wrapper{
  .intl-tel-input{
    width: 100%;
    input[type=tel]{
      width: 100%;
    }
  }
}

.rights_Section {
  padding: 15px 0;
  text-align: center;
  color: #ffffff;
  background-color: ${themeGet('primary.0', '#0088E5')};
  @include sm-down {
    font-size: 12px;
  }
}

h5.ant-typography{
  font-size: 14px;
}

@media (max-width: 992px){
  .home-search-button{
    width: 100%;
  }
}

@media (max-width: 370px) {
  .xs-search-btn{
    flex: 1;
  }
}

@media (max-width: 340px) {
  .xs-search-btn {
    max-width: 100%;
    flex: 100%;
    margin-top: 10px;
  }
}

.heading-content {
  display: block;
  color: #0088e5;
  font-size: 20px;
  margin-bottom: 20px;
}
.heading-content-summary {
  display: block;
  color: #0088e5;
  font-size: 20px;
  margin-bottom: 20px;
  text-transform: uppercase;
}
.sub-heading-content {
  display: block;
  color: #0088e5;
  font-size: 16px;
  margin-bottom: 14px;
}
.heading-content-faq {
  display: block;
  color: #0088e5;
  font-size: 24px;
  margin-bottom: 20px;
}
.content-info {
  color: #2c2c2c;
}
.content-info p {
  margin-bottom: 15px;
}
.count-nav {
  margin: 0;
  list-style: none;
  padding: 0;
  counter-reset: section;
}
.count-nav > li strong {
  display: block;
  margin-bottom: 25px;
  font-weight: normal;
}
.count-nav > li {
  display: block;
  counter-reset: subsection;
  position: relative;
  padding-left: 32px;
}
.count-nav > li:before {
  content: "" counter(section, decimal) ". ";
  counter-increment: section;
  position: absolute;
  left: 0;
  font-size: 20px;
  top: 0;
  color: #0088e5;
}
.count-nav > li div {
  position: relative;
  padding-left: 36px;
}
.count-nav > li div:before {
  content: counter(section, decimal) "." counter(subsection, decimal) " ";
  counter-increment: subsection;
  position: absolute;
  left: 0;
  top: 0;
  font-weight: bold;
}
.count-nav > li p a {
  color: #0088e5;
  text-decoration: none;
}
.count-nav > li p a:hover {
  color: #0088e5;
  text-decoration: underline;
}

.count-nav > li div:before {
  content: counter(section,decimal) "." counter(subsection,decimal) " ";
  counter-increment: subsection;
  position: absolute;
  left: 0;
  top: 0;
  font-weight: bold;
}

.linksTarget {
  padding: 0;
  margin: 0 0 60px 0;
  list-style: none;
}
.linksTarget > li {
  display: block;
  margin-bottom: 5px;
  position: relative;
  padding-left: 26px;
}
.linksTarget > li > a {
  color: #3d3d3d;
  font-size: 16px;
  text-decoration: none;
}
.linksTarget > li > a:hover, .linksTarget > li > a:focus {
  text-decoration: none;
  color: #0088e5;
}
.about-us-page {
  margin: 50px auto;
}
.linksTarget > li > a .fa {
  font-size: 16px;
  position: absolute;
  left: 0;
  top: 4px;
}


.DateRangePicker{
  width: 100%;
  .DateRangePickerInput{
    width: 100%;
    .DateInput{
      width: 45% !important;
      .DateInput_input__focused{
        border-color: ${themeGet('primary.1', '#0088E5')};
      }

    }
  } 
}

.search-select-col{
  width: 160px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    display: none;
  }
}


`;

export default GlobalStyle;
