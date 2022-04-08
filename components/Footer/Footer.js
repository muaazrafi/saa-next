import React from "react";
import Image from "next/image";
import moment from "moment";
import { Row, Col } from "antd";
import {
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import Images from "../../container/Home/Images";
import FooterWrapper from "./Footer.style";

const Footer = ({ logo, menu, bgSrc, copyright, className, path }) => {
  return (
    <FooterWrapper>
      <section className="footer_section">
        <div className="container">
          <Row gutter={[20, 40]}>
            <Col xs={24} xl={12} className="padding_right">
              <div className="left_col_div">
                <Image src={Images.logo} alt="logo" width={100} height={50} />
                <div className="text_area">
                  <p>
                    Study Abroad Apartments is an online housing marketplace
                    that removes the hassle of finding furnished student
                    accommodation worldwide. If you are traveling for an
                    internship or studying abroad in...
                  </p>
                </div>
                <div className="social_icons">
                  <FacebookFilled
                    style={{
                      fontSize: "25px",
                      marginRight: "5px",
                      color: "#999999",
                    }}
                  />
                  <TwitterSquareFilled
                    style={{
                      fontSize: "25px",
                      marginRight: "5px",
                      color: "#999999",
                    }}
                  />
                  <InstagramFilled
                    style={{
                      fontSize: "25px",
                      marginRight: "5px",
                      color: "#999999",
                    }}
                  />
                  <LinkedinFilled
                    style={{
                      fontSize: "25px",
                      marginRight: "5px",
                      color: "#999999",
                    }}
                  />
                </div>
              </div>
            </Col>

            <Col xs={24} xl={6}>
              <div className="text_area">
                <h2 className="heading_sm">Information</h2>
                <p>Sign In</p>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Help Center</p>
              </div>
            </Col>

            <Col xs={24} xl={6}>
              <div className="text_area right_col_div">
                <h2 className="heading_sm">Get in touch</h2>
                <div className="text_area">
                  <h3>Location:</h3>
                  <p>
                    808 Lehigh Avenue Union, New Jersey 07083 Av. de les
                    Drassanes, 6, 08001 Barcelona Floor 15
                  </p>
                </div>
                <div className="text_area">
                  <h3>Email:</h3>
                  <p>info@studyabroadapartments.com</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* <FooterWrapper id="footer" className={className} bg-img={bgSrc}>
        {logo && logo}
        {menu && <MenuWrapper>{menu}</MenuWrapper>}
        {copyright && <CopyrightArea>{copyright}</CopyrightArea>}
      </FooterWrapper>
      {!!path && <SecondaryFooter />} */}
      </section>
      <section className="rights_Section">
          © {moment().year()} Study Abroad Apartments. All Rights Reserved
        </section>
    </FooterWrapper>
  );
};

export default Footer;
