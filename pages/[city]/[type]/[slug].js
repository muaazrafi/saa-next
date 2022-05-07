import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import { useRouter } from "next/router";
import Sticky from "react-stickynode";
import { Row, Col, Modal, Button } from "antd";
import Container from "components/UI/Container/Container";
import Loader from "components/Loader/Loader";
import { getDeviceType } from "library/helpers/get-device-type";
import Description from "container/SinglePage/Description/Description";
import Amenities from "container/SinglePage/Amenities/Amenities";
import Calender from "container/SinglePage/Calender/Calender";
import AccommodationPolicies from "container/SinglePage/AccommodationPolicies/AccommodationPolicies";
import Location from "container/SinglePage/Location/Location";
import Reservation from "container/SinglePage/Reservation/Reservation";
import BottomReservation from "container/SinglePage/Reservation/BottomReservation";
import TopBar from "container/SinglePage/TopBar/TopBar";
import Apartments from "container/SinglePage/Similar/Apartments";

import SinglePageWrapper, {
  PostImage,
} from "container/SinglePage/SinglePageView.style";
import ImageGrid from "container/SinglePage/ImageGrid/ImageGrid";
import PostImageGallery from "container/SinglePage/ImageGallery/ImageGallery";
import { fetchApartment } from "store/services/apartment";
import { reset } from "store/apartmentSlice";
import { resetBooking } from "store/bookingSlice";

export default function SinglePostPage({ deviceType, query }) {
  const dispatcher = useDispatch();
  const router = useRouter();
  const { slug } = router.query;
  const { apartment, loading } = useSelector((state) => state.apartment);
  const [href, setHref] = useState("");
  const [isModalShowing, setIsModalShowing] = useState(false);

  const pageTitle =
    query.slug.split("-").join(" ").charAt(0).toUpperCase() +
    query.slug.split("-").join(" ").slice(1);

  useEffect(() => {
    dispatcher(reset());
    dispatcher(resetBooking());
  }, [slug]);

  useEffect(() => {
    if (!apartment && loading) {
      dispatcher(fetchApartment(slug));
    }
    const path = window.location.href;
    setHref(path);
  }, [apartment]);

  return (
    <>
      <Head>
        <title>
          {pageTitle} | Student apartment in {router.query.city}
        </title>
        <meta
          name="description"
          content={apartment && apartment.apartment_summary}
        />
      </Head>
      <SinglePageWrapper>
        <PostImage>
          {apartment && apartment.image_public_ids && (
            <ImageGrid
              images={apartment.image_public_ids}
              viewMore={
                <Button
                  type="primary"
                  onClick={() => setIsModalShowing(true)}
                  className="image_gallery_button"
                >
                  View Photos
                </Button>
              }
            />
          )}
          {/* <Image
            src="/images/single-post-bg.jpg"
            layout="fill"
            objectFit="cover"
            alt="Listing details banner"
          /> */}
        </PostImage>

        <TopBar title={apartment && apartment.name} shareURL={href} />
        {apartment && (
          <Container>
            <Row gutter={30} id="reviewSection" style={{ marginTop: 30 }}>
              <Col xl={16}>
                <Description
                content={apartment.apartment_description}
                title={apartment.name}
                location={`${apartment.area} - ${apartment.city} (ID: #${apartment.id})`}
              />
                <Amenities amenities={apartment.amenities} />
              <AccommodationPolicies accommodationpolicies={apartment.amenities} />
                <Calender />
                <Location />
              </Col>
              <Col xl={8}>
                {deviceType === "desktop" ? (
                  <Sticky
                    innerZ={999}
                    activeClass="isSticky"
                    top={202}
                    bottomBoundary="#reviewSection"
                  >
                    <Reservation />
                  </Sticky>
                ) : (
                  <BottomReservation
                    title={apartment.name}
                    price={apartment.display_price}
                  />
                )}
              </Col>
            </Row>
          </Container>
        )}
        <br />

        <Container className="overflow-it">
          <h2>Similar Listings</h2>
          <Apartments />
        </Container>
      </SinglePageWrapper>

      <Modal
        visible={isModalShowing}
        onCancel={() => setIsModalShowing(false)}
        footer={null}
        width="100%"
        maskStyle={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
        }}
        wrapClassName="image_gallery_modal"
        closable={false}
      >
        <>
          {apartment && apartment.image_public_ids && (
            <PostImageGallery images={apartment.image_public_ids} />
          )}
          <Button
            onClick={() => setIsModalShowing(false)}
            className="image_gallery_close"
          >
            <svg width="16.004" height="16" viewBox="0 0 16.004 16">
              <path
                id="_ionicons_svg_ios-close_2_"
                d="M170.4,168.55l5.716-5.716a1.339,1.339,0,1,0-1.894-1.894l-5.716,5.716-5.716-5.716a1.339,1.339,0,1,0-1.894,1.894l5.716,5.716-5.716,5.716a1.339,1.339,0,0,0,1.894,1.894l5.716-5.716,5.716,5.716a1.339,1.339,0,0,0,1.894-1.894Z"
                transform="translate(-160.5 -160.55)"
                fill="#909090"
              />
            </svg>
          </Button>
        </>
      </Modal>
    </>
  );
}

export async function getServerSideProps(context) {
  const { req, query } = context;
  const deviceType = getDeviceType(req);
  return {
    props: { query, deviceType },
  };
}
