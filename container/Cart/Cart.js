import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Card, Drawer, Button } from "antd";
import Carousel from "react-multi-carousel";
import { BsCart4 } from "react-icons/bs";
import { updatePrice } from "store/bookingSlice";
import { fetchApartment } from "store/services/apartment";
import { fetchBooking } from "store/services/booking";
import ReservationDetails from "container/SinglePage/Reservation/ReservationDetails";
import MonthlyBreakDown from "container/SinglePage/Reservation/MonthlyBreakDown";
import CartUp, { CartDrawer } from "./CartUp.style";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
    paritialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    paritialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const Cart = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const apartmentId = router.query.apartment;
  const bookingId = router.query.booking;
  const [visible, setVisible] = useState(false);

  const { apartment } = useSelector((state) => state.apartment);
  const { booking } = useSelector((state) => state.booking);

  useEffect(() => {
    if (apartmentId && !apartment) {
      dispatch(fetchApartment(apartmentId));
    }
  }, [apartmentId]);

  useEffect(() => {
    if (bookingId && !booking.id) {
      dispatch(fetchBooking(bookingId));
    }
  }, [bookingId]);

  useEffect(() => {
    if (apartment && booking.id) {
      dispatch(updatePrice(apartment));
    }
  }, [booking, apartment]);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <CartUp onClick={showDrawer}>
        <Button type="primary" className="cart-button">
          <BsCart4 size={26} color="#fff" />
        </Button>
      </CartUp>
      <Drawer
        title="Booking Details"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <CartDrawer>
          {apartment && (
            <>
              <Card size="small" title={apartment.name}>
                <Carousel
                  ssr
                  additionalTransfrom={0}
                  arrows
                  autoPlaySpeed={1000}
                  containerClass="container"
                  dotListClass=""
                  draggable
                  focusOnSelect={false}
                  infinite
                  itemClass=""
                  renderDotsOutside={false}
                  responsive={responsive}
                  showDots={false}
                  sliderClass=""
                  slidesToSlide={1}
                >
                  {apartment.image_public_ids.map((photo, index) => (
                    <img
                      key={index}
                      src={photo.img}
                      alt={photo.img}
                      style={{
                        height: "200px",
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                  ))}
                </Carousel>
              </Card>
            </>
          )}
          <br />
          <Card size="small" title="Payment Details">
            <ReservationDetails />
          </Card>
          <br />
          <Card size="small" title="Monthly Breakdown">
            <MonthlyBreakDown />
          </Card>
        </CartDrawer>
      </Drawer>
    </>
  );
};

export default Cart;
