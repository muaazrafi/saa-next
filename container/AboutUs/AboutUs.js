import React from 'react';
import Image from "next/image";
import { Row, Col } from "antd";
import AboutWrapper from './AboutUs.style';
import Images from '../Home/Images';

const AboutUs = (props) => {
  return <AboutWrapper>
      <section className="company_section padding_main">
        <div className="container">
          <div className="pagenav_div">
            <span>Home</span>
            <span className="seperator">/</span>
            <span>About Us</span>
          </div>

          <h2>We built the company we wish we had</h2>
        </div>

        <div className="about_text">
          <div className="container">
            <Row gutter={[20, 20]}>
              <Col xs={24} xl={8}>
                <div className="about_inner">
                  <div className="img_div">
                    <img
                      src={Images.students}
                      alt="students"
                      width={65}
                      height={65}
                    />
                  </div>

                  <div className="text_area">
                    <div className="numbers">5,000+</div>
                    <p>students from over 50 countries have stayed with us</p>
                  </div>
                </div>
              </Col>

              <Col xs={24} xl={8}>
                <div className="about_inner">
                  <div className="img_div">
                    <img
                      src={Images.university}
                      alt="university"
                      width={40}
                      height={40}
                    />
                  </div>

                  <div className="text_area">
                    <div className="numbers">100+</div>
                    <p>affiliated universities</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section className="story_section padding_main">
        <div className="container">
          <h2>Our Story</h2>

          <Row gutter={[20, 20]}>
            <Col xs={24} xl={17}>
              <div className="text_area">
                <p>
                  Study Abroad Apartments is an online housing marketplace that
                  removes the hassle of finding furnished student accommodation
                  worldwide. If you are traveling for an internship or studying
                  abroad in an exchange program, SAA delivers a quality solution
                  for you to easily book your accommodation online. Say goodbye
                  to searching the internet looking for far away one-off hosts
                  who are not accustom to housing students and long stays.
                </p>

                <p>
                  Simply search by city and date, and we will present furnished
                  options that best suit your needs as a student. For
                  universities and study abroad programs, let us deal with the
                  logistics of finding safe and reliable accommodation for your
                  students. We know the markets and our custom solutions allow
                  you a stress free and reliable process in obtaining
                  international student accommodation.
                </p>

                <p>
                  SAA is founded on the principles of customer service and
                  teamwork. Behind our technology is a highly dedicated
                  international staff with the passion needed to assist students
                  from all walks of life. After spending their semester abroad
                  in 2013, our founders worked to create a solution to help
                  future students easily book safe and reliable housing options.
                  Since then we have helped thousands of students from
                  universities all over the world. Our objective is to help
                  millions of young people receive incredible experiences and
                  connect the next generation through shared housing.
                </p>
              </div>
            </Col>
          </Row>
        </div>

        <div className="absolute_imgone">
          <img src={Images.circle} alt="circle" width={40} height={40} />
        </div>

        <div className="absolute_imgtwo">
          <img
            src={Images.cloud_right}
            alt="cloud_right"
            width={170}
            height={120}
          />

          <div className="circle_dots">
            <img
              src={Images.circle}
              alt="circle_dots"
              width={70}
              height={70}
            />
          </div>
        </div>

        <div className="absolute_imgthree">
          <img
            src={Images.cloud_right}
            alt="cloud_dots"
            width={130}
            height={120}
          />

          <div className="circle_dots">
            <img
              src={Images.rect_dots}
              alt="rect_dots"
              width={70}
              height={70}
            />
          </div>
        </div>

        <div className="absolute_imgfour">
          <img
            src={Images.circle_half}
            alt="circle_half"
            width={28}
            height={54}
          />
        </div>

        <div className="absolute_imgfive">
          <img
            src={Images.circle_dots}
            alt="circle_dots"
            width={70}
            height={70}
          />
        </div>
      </section>

  </AboutWrapper>
}

export default AboutUs;