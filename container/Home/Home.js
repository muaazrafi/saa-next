import React from "react";
import Link from "next/link";
import Images from "./Images";
import { Row, Col, Input, Button } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import HomeSearch from "./Search/HomeSearch";
import HomeWrapper from "./Home.style";

const Home = (props) => {
  return (
    <HomeWrapper>
      <section className="banner_section">
        <div className="container">
          <Row>
            <Col xs={24} xl={9} className="col_inner">
              <div className="head_wrapper">
                <h2 className="head_lg">Study Abroad Apartments</h2>
                <p>
                  Pick your city, rally your crew, live and explore a semester
                  abroad that lasts a lifetime
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Booking section */}
      <HomeSearch />

      {/* Destination section */}
      <section className="destination_section padding_main">
        <div className="container">
          <Row gutter={[20, 20]}>
            <Col xs={24} xl={8}>
              <Link href="/listings/barcelona">
                <div className="img_div bg_one">
                  <div>Barcelona, Spain</div>
                </div>
              </Link>
            </Col>

            <Col xs={24} xl={8}>
              <div className="green_area">
                <h2>Our Destinations</h2>
                <p>Pack your bags and go</p>
              </div>
            </Col>

            <Col xs={24} xl={8}>
              <Link href="/listings/madrid">
                <div className="img_div bg_two">
                  <div>Madrid, Spain</div>
                </div>
              </Link>
            </Col>
          </Row>
        </div>
      </section>

      {/* Semester section */}
      <section className="semester_section padding_main">
        <div className="absolute_imgone">
          <img src={Images.circle} alt="circle" width={40} height={40} />
        </div>
        <div className="container">
          <Row gutter={[20, 20]}>
            <Col xs={24} xl={12}>
              <div className="img_div"></div>
            </Col>

            <Col xs={24} xl={12}>
              <div className="text_area">
                <h2>Welcome to the semester of your life</h2>
                <p>
                  Study Abroad Apartments offers the best study abroad housing
                  for students studying abroad. Explore beautiful cities across
                  Europe with your best friends and hundreds of other
                  like-minded abroad goers.
                </p>
                <p>
                  You'll have your own apartment, live in the same buildings as
                  other abroad students, and the freedom to map your own path
                  for an entire semester throughout Spain and the rest of
                  Europe.
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="absolute_imgtwo">
          <img src={Images.circle} alt="circle" width={50} height={50} />
        </div>

        <div className="absolute_imgthree">
          <img
            src={Images.cloud_right}
            alt="cloud_right"
            width={92}
            height={79}
          />
        </div>
      </section>

      {/* Feature section */}
      <section className="feature_section">
        <div className="container">
          <Row gutter={[20, 20]} justify="center">
            <Col xs={24} xl={14}>
              <div className="text_area">
                <h2>What sets us apart</h2>
                <p>
                  We know how hectic finding a perfect place from thousands of
                  miles away can be. We take the risk and guesswork out of the
                  picture. All you have to do is pack your bags and go.
                </p>
              </div>
            </Col>
          </Row>

          <div className="padding_main">
            <Row gutter={[20, 20]}>
              <Col xs={24} xl={6}>
                <div className="feature_inner">
                  <div className="img_div">
                    <div>
                      <img
                        src={Images.listing}
                        alt="listing"
                        width={60}
                        height={60}
                      />
                    </div>

                    <div className="absolute_img">
                      <img
                        src={Images.cloud_right}
                        alt="cloud_right"
                        width={92}
                        height={79}
                      />
                    </div>
                  </div>

                  <div className="text_area">
                    <h2 className="heading_sm">Verified Listings</h2>
                    <p>
                      Not bait and switch promotion. We guarantee that what you
                      see on our site is what you get when you move in.
                    </p>
                  </div>
                </div>
              </Col>

              <Col xs={24} xl={6}>
                <div className="feature_inner">
                  <div className="img_div">
                    <div>
                      <img
                        src={Images.manage}
                        alt="manage"
                        width={60}
                        height={60}
                      />
                    </div>

                    <div className="absolute_img">
                      <img
                        src={Images.cloud_right}
                        alt="cloud_right"
                        width={92}
                        height={79}
                      />
                    </div>
                  </div>

                  <div className="text_area">
                    <h2 className="heading_sm">Professionally Managed</h2>
                    <p>
                      All apartments have management and support on the ground
                      to ensure an amazing stay.
                    </p>
                  </div>
                </div>
              </Col>

              <Col xs={24} xl={6}>
                <div className="feature_inner">
                  <div className="img_div">
                    <div>
                      <img
                        src={Images.community}
                        alt="Community"
                        width={60}
                        height={60}
                      />
                    </div>

                    <div className="absolute_img">
                      <img
                        src={Images.cloud_right}
                        alt="cloud_right"
                        width={92}
                        height={79}
                      />
                    </div>
                  </div>

                  <div className="text_area">
                    <h2 className="heading_sm">Community</h2>
                    <p>
                      Live with other students in the same building. Make new
                      friends that last a lifetime.
                    </p>
                  </div>
                </div>
              </Col>

              <Col xs={24} xl={6}>
                <div className="feature_inner">
                  <div className="img_div">
                    <div>
                      <img
                        src={Images.knowledge}
                        alt="knowledge"
                        width={60}
                        height={60}
                      />
                    </div>

                    <div className="absolute_img">
                      <img
                        src={Images.cloud_right}
                        alt="cloud_right"
                        width={92}
                        height={79}
                      />
                    </div>
                  </div>

                  <div className="text_area">
                    <h2 className="heading_sm">Local Knowledge</h2>
                    <p>
                      We are experts in the cities that we serve, We can guide
                      you to the right place and are always available for you.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      {/* Experience Section */}

      <section className="experience_section padding_main">
        <div className="absolute_imgone">
          <img src={Images.cap} alt="cap" width={76} height={66} />
        </div>

        <div className="absolute_imgtwo">
          <img src={Images.shahdow} alt="shahdow" width={76} height={57} />
        </div>

        <div className="container">
          <Row gutter={[20, 20]}>
            <Col xs={24} xl={8}>
              <div className="text_area">
                <h2>Earn money and gain work experience</h2>
              </div>
              <Button type="primary">Become an Ambassador</Button>
            </Col>

            <Col xs={24} xl={8}>
              <div className="img_div bg_one">
                <img src={Images.money} alt="money" width={447} height={274} />
                <div>Earn Money</div>
              </div>

              <div className="absolute_imgfour">
                <img
                  src={Images.notebook}
                  alt="notebook"
                  width={136}
                  height={99}
                />
              </div>
            </Col>

            <Col xs={24} xl={8}>
              <div className="img_div bg_one">
                <img
                  src={Images.experience}
                  alt="experience"
                  width={447}
                  height={274}
                />
                <div>Gain work experience</div>
              </div>

              <div className="absolute_imgthree">
                <img
                  src={Images.shahdow}
                  alt="shahdow"
                  width={76}
                  height={57}
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Work Section */}

      <section className="work_section padding_main">
        <div className="container">
          <Row gutter={[20, 20]}>
            <Col xs={24} xl={14}>
              <div className="text_area">
                <h2>So how does this work?</h2>
              </div>
            </Col>
          </Row>

          <div className="work_items">
            <Row gutter={[20, 80]}>
              <Col xs={24} xl={8}>
                <div className="work_inner">
                  <div className="colored_circle">1</div>
                  <div>
                    <img
                      src={Images.search}
                      width={32}
                      height={32}
                      alt="search"
                    />
                  </div>

                  <div className="text_area">
                    <h2 className="heading_sm">Search Verified Properties</h2>
                    <p>
                      Select your city, move-in, and move-out date, then search
                      through thousands of rentals. Filter your search and find
                      what you are looking for!
                    </p>
                  </div>
                </div>
              </Col>

              <Col xs={24} xl={8}>
                <div className="work_inner">
                  <div className="colored_circle">2</div>
                  <div>
                    <img src={Images.book} alt="book" width={40} height={32} />
                  </div>

                  <div className="text_area">
                    <h2 className="heading_sm">
                      Book with the help of our team
                    </h2>
                    <p>
                      Contact our team if you have any questions. One of our
                      booking specialists will personally contact you and help
                      with your search.
                    </p>
                  </div>
                </div>
              </Col>

              <Col xs={24} xl={8}>
                <div className="work_inner">
                  <div className="absolute_imgone">
                    <img
                      src={Images.shahdow}
                      alt="shahdow"
                      width={100}
                      height={72}
                    />
                  </div>

                  <div className="colored_circle">3</div>
                  <div>
                    <img
                      src={Images.confirm}
                      alt="confirm"
                      width={40}
                      height={30}
                    />
                  </div>

                  <div className="text_area">
                    <h2 className="heading_sm">
                      Confirmation from the landlord
                    </h2>
                    <p>
                      Your landlord has 48 hours to accept or reject your
                      booking request. We do our best to only show you options
                      we know are available.
                    </p>
                  </div>
                </div>
              </Col>

              <Col xs={24} xl={8}>
                <div className="work_inner min_h_361">
                  <div className="colored_circle">4</div>
                  <div>
                    <img
                      src={Images.pay}
                      alt="confirm"
                      width={45}
                      height={30}
                    />
                  </div>

                  <div className="text_area">
                    <h2 className="heading_sm">
                      Pay individually or split with roommates
                    </h2>
                    <p>
                      Once your booking is confirmed you must complete the first
                      month's rent within three days of acceptance. You have the
                      option to split the payment with your roommates. You have
                      access to this through your personal dashboard. SAA keeps
                      your first month's rent safe until you move in or sign a
                      conract with your landlord.
                    </p>
                  </div>
                </div>
              </Col>

              <Col xs={24} xl={8}>
                <div className="work_inner min_h_361">
                  <div className="colored_circle">5</div>
                  <div>
                    <img src={Images.home} alt="home" width={35} height={35} />
                  </div>

                  <div className="text_area">
                    <h2 className="heading_sm">Home sweet home</h2>
                    <p>
                      Fly to your destination city and move in. You will pay
                      rent directly to your landlord, and we are here to give
                      support throught your stay.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="absolute_imgtwo">
          <img src={Images.globe} alt="globe" width={170} height={260} />
        </div>

        <div className="absolute_imgthree">
          <img src={Images.paper} alt="paper" width={175} height={92} />
        </div>
      </section>

      {/* Roommate Section */}

      <section className="roommate_section padding_main">
        <div className="container">
          <Row gutter={[20, 20]}>
            <Col xs={24} xl={12}>
              <div className="text_area">
                <h2>We are here to help, even find you a roommate!</h2>
                <p>
                  Study Abroad Apartments doesn't just guide you to
                  accommodation that fits your needs before you take off. We
                  also provide ongoing support for your entire stay. If you have
                  any questions, just give us a call.
                </p>
                <p>
                  If you are looking for a roommate, you can find one in our
                  Abroad Talk group on Facebook.
                </p>
              </div>
              <Button type="primary">Find a Roommate</Button>
            </Col>

            <Col xl={1}></Col>

            <Col xs={24} xl={11}>
              <div>
                <img
                  src={Images.roommate}
                  alt="roommate"
                  width={640}
                  height={447}
                />
              </div>

              <div className="absolute_imgone">
                <img src={Images.circle} alt="circle" width={40} height={40} />
              </div>
            </Col>
          </Row>
        </div>

        <div className="absolute_imgtwo">
          <img src={Images.circle} alt="circle" width={50} height={50} />
        </div>
      </section>

      {/* Your Words Section */}

      <section className="your_words_section padding_main">
        <div className="container">
          <Row justify="center">
            <Col xs={24} xl={12}>
              <div className="text_area headline_text">
                <h2>Your word, not ours</h2>
                <p>
                  After 15 years running The Study Abroad Apartments , people
                  have a lot to say about us
                </p>
              </div>
            </Col>
          </Row>

          <Row gutter={[20, 20]}>
            <Col xs={24} xl={8}>
              <div className="words_inner">
                <div className="flex_area">
                  <div className="colored_circle">S</div>
                  <div className="name_div">Shana</div>
                  <span className="university_span">
                    University of Maryland
                  </span>
                </div>

                <div className="text_area">
                  <p>
                    “One of the highlights of my trip was travelling, of which I
                    journeyed to 11 different cities! As fun as travelling was,
                    it was always a comfort coming back to a beautiful apartment
                    that I considered home. Our living situation couldn't have
                    been better and I am sure they will make your study abroad
                    experience just as enjoyable.”
                  </p>
                </div>
              </div>
            </Col>

            <Col xs={24} xl={8}>
              <div className="words_inner">
                <div className="flex_area">
                  <div className="colored_circle">S</div>
                  <div className="name_div">Sal</div>
                  <span className="university_span">Penn State University</span>
                </div>

                <div className="text_area">
                  <p>
                    "The SAA team provided prompt and informative responses to
                    any questions I had. Study Abroad Apartments helped make our
                    abroad experience even better, and relieved tons of stress
                    in finding a suitable apartment."
                  </p>
                </div>
              </div>
            </Col>

            <Col xs={24} xl={8}>
              <div className="words_inner">
                <div className="flex_area">
                  <div className="colored_circle">V</div>
                  <div className="name_div">Valeria</div>
                  <span className="university_span">American University</span>
                </div>

                <div className="text_area">
                  <p>
                    "A friend told me about SAA, so I immediately contacted them
                    and I got a response the same day. The apartment was in an
                    excellent location and the interior was modern and
                    comfortable. The building was full of other students from
                    different schools, and it was great meeting people with whom
                    I still hold close friendships today."
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Blogs Section */}

      <section className="blogs_section padding_main">
        <div className="container">
          <Row justify="center">
            <Col xs={24} xl={12}>
              <div className="text_area headline_text">
                <h2>Latest from our blogs</h2>
              </div>
            </Col>
          </Row>

          <Row gutter={[20, 20]}>
            <Col xs={24} xl={8}>
              <div className="img_div">
                <img
                  src={Images.study_one}
                  alt="one"
                  width={420}
                  height={270}
                />
                <div className="div_postition">
                  <div>Study Abroad Apartments</div>
                  <div>
                    <CalendarOutlined
                      style={{ fontSize: "16px", marginRight: "8px" }}
                    />
                    <span>May 28, 2021</span>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={24} xl={8}>
              <div className="img_div">
                <img
                  src={Images.study_two}
                  alt="two"
                  width={420}
                  height={270}
                />
                <div className="div_postition">
                  <div>Study Abroad Apartments</div>
                  <div>
                    <CalendarOutlined
                      style={{ fontSize: "16px", marginRight: "8px" }}
                    />
                    <span>May 28, 2021</span>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={24} xl={8}>
              <div className="img_div">
                <img
                  src={Images.study_three}
                  alt="three"
                  width={420}
                  height={270}
                />
                <div className="div_postition">
                  <div>Study Abroad Apartments</div>
                  <div>
                    <CalendarOutlined
                      style={{ fontSize: "16px", marginRight: "8px" }}
                    />
                    <span>May 28, 2021</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Brands Section */}

      <section className="brands_section padding_main">
        <div className="container">
          <Row gutter={[20, 40]}>
            <Col>
              <div className="img_div">
                <img
                  src={Images.brand_one}
                  alt="brand_one"
                  width={200}
                  height={47}
                />
              </div>
            </Col>

            <Col>
              <div className="img_div">
                <img
                  src={Images.brand_two}
                  alt="brand_two"
                  width={190}
                  height={71}
                />
              </div>
            </Col>

            <Col>
              <div className="img_div">
                <img
                  src={Images.brand_three}
                  alt="brand_three"
                  width={256}
                  height={65}
                />
              </div>
            </Col>

            <Col>
              <div className="img_div">
                <img
                  src={Images.brand_four}
                  alt="brand_four"
                  width={86}
                  height={68}
                />
              </div>
            </Col>

            <Col>
              <div className="img_div">
                <img
                  src={Images.brand_five}
                  alt="brand_five"
                  width={270}
                  height={55}
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </HomeWrapper>
  );
};

export default Home;
