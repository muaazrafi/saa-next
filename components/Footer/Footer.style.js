import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const FooterWrapper = styled.footer`
  .footer_section {
    padding-bottom: 40px;
  }
  .footer_section .top-border {
    border-top: 1px solid #dbdbdb;
    padding-top: 40px;
  }
  .footer_section .left_col_div p {
    padding: 25px 0;
  }
  .footer_section .right_col_div .text_area:first-of-type {
    padding: 0 0 15px 0;
  }
  .footer_section .padding_right {
    padding-right: 14% !important;
  }
  .text_area a {
    color: #999;
  }
  .text_area a:hover {
    color: #666;
  }
  @media (max-width: 768px) {
    .footer_section .padding_right {
      padding-right: 0 !important;
  }
  }
  .footer_section .text_area p {
    color: #999;
    margin-bottom: 20px;
  }
  .footer_section .text_area p:last-of-type {
    margin-bottom: 0;
  }
  .footer_section .text_area h3 {
    font-size: 14px;
    color: #999;
  }
`;

export const MenuWrapper = styled.div`
  margin-top: 51px;
  padding-left: 10px;

  @media (max-width: 480px) {
    margin-top: 29px;
    padding-left: 0;
  }

  ul,
  .ant-menu,
  ul.ant-menu {
    display: flex;
    align-items: center;
    border: 0;
    background-color: transparent;

    @media (max-width: 480px) {
      flex-wrap: wrap;
    }

    li {
      margin: 0 30px;
      padding: 0;
      height: auto;
      margin-bottom: 0 !important;

      @media (max-width: 480px) {
        margin: 0 7px;
      }

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      &.ant-menu-item-selected {
        background-color: transparent;
      }

      color: ${themeGet('text.0', '#2C2C2C')};
      font-size: 15px;
      line-height: 18px;
      font-weight: 700;
      transition: color 0.2s ease-in-out;

      a {
        color: ${themeGet('text.0', '#2C2C2C')};
        transition: color 0.2s ease-in-out;
        &:hover {
          color: ${themeGet('primary.0', '#0088E5')};
        }
      }
    }
  }
`;

export const CopyrightArea = styled.div`
  color: ${themeGet('text.1', '#909090')};
  font-size: 15px;
  line-height: 18px;
  font-weight: 400;
  margin-top: 29px;

  @media (max-width: 480px) {
    margin-top: 14px;
  }
`;

export const SecondaryFooter = styled.div`
  @media (max-width: 1200px) {
    height: 74px;
  }
`;

export default FooterWrapper;
