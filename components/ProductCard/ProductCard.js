import React from "react";
import Carousel from "react-multi-carousel";
import Favourite from "components/UI/Favorite/Favorite";
import GridCard from "../GridCard/GridCard";
import { useSelector } from "react-redux";

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
export default function ProductCard({
  id,
  name,
  apart_type,
  area,
  city,
  currency,
  display_price,
  image_public_ids,
  link_path,
  deviceType,
  number_of_beds,
  number_of_bathrooms
}) {
  const { search } = useSelector((state) => state.apartments);
  
  return (
    <GridCard
      id={id}
      favorite={
        <Favourite
          onClick={(event) => {
            console.log(event);
          }}
        />
      }
      location={area}
      title={name}
      price={`${display_price}/Montly`}
      currency={currency}
      apart_type={apart_type}
      number_of_beds={number_of_beds}
      number_of_bathrooms={number_of_bathrooms}
      link_path={`${link_path}${
        search && search.startDate && search.endDate
          ? `?startDate=${search.startDate}&endDate=${search.endDate}`
          : ""
      }`}
    >
      <Carousel
        ssr
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        renderDotsOutside={false}
        responsive={responsive}
        deviceType={deviceType}
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
      >
        {image_public_ids.map((url, index) => (
          <img key={index} src={url.img ? url.img : url} alt={name} />
        ))}
      </Carousel>
    </GridCard>
  );
}
