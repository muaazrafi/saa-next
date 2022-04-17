import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const AboutWrapper = styled.div`
.company_section {
  background-color: #f7fafb;
}
.company_section .pagenav_div {
  font-size: 14px;
  text-align: center;
}
.company_section .pagenav_div .seperator {
  color: #333;
  padding: 0 15px;
}
.company_section .pagenav_div span:first-of-type {
  color: #333;
}
.company_section .pagenav_div span:last-of-type {
  color: #06c1f2;
}
.company_section h2 {
  font-size: 32px;
  text-align: center;
  color: #333;
  font-weight: 600;
  margin: 15px 0 40px 0;
}
.company_section .about_text .ant-row {
  justify-content: center;
}
.company_section .about_text .about_inner {
  display: flex;
  box-shadow: 2px 3px 3px 0px #000;
  background: #fff;
  padding: 40px;
  border-radius: 15px;
  min-height: 155px;
  height: auto;
  position: relative;
}
.company_section .about_text .about_inner .text_area {
  padding-left: 20px;
}
.company_section .about_text .about_inner .text_area .numbers {
  font-size: 18px;
  color: #414141;
  font-weight: 600;
  margin-bottom: 5px;
}
.company_section .about_text .about_inner .text_area p {
  text-transform: uppercase;
  margin-bottom: 0;
}
.story_section {
  text-align: center;
  position: relative;
}
.story_section .ant-row {
  justify-content: center;
}
.story_section .absolute_imgone {
  position: absolute;
  right: 683px;
  top: 35px;
}
.story_section .absolute_imgtwo {
  position: absolute;
  top: 98px;
  left: 78px;
}
.story_section .absolute_imgtwo .circle_dots {
  position: absolute;
  top: -15px;
  left: 27px;
}
.story_section .absolute_imgthree {
  position: absolute;
  bottom: 88px;
  right: 0;
}
.story_section .absolute_imgthree .circle_dots {
  position: absolute;
  top: -5px;
  right: 0;
}
.story_section .absolute_imgfour {
  position: absolute;
  left: 0;
  bottom: 75px;
}
.story_section .absolute_imgfive {
  position: absolute;
  right: 400px;
  bottom: -30px;
  z-index: -1;
}
@media (max-width: 1200px) {
  .story_section .absolute_imgone, .story_section .absolute_imgtwo, .story_section .absolute_imgthree, .story_section .absolute_imgfour, .story_section .absolute_imgfive {
    display: none;
 }
}
.story_section h2 {
  font-size: 32px;
  text-align: center;
  color: #333;
  font-weight: 600;
  margin: 15px 0 40px 0;
}
.company_section, .story_section.padding_main {
  padding: 100px 0px;
}

`;


export default AboutWrapper;