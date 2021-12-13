import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import Carousel from 'react-multi-carousel';
import Rating from 'components/UI/Rating/Rating';
import Favourite from 'components/UI/Favorite/Favorite';
import GridCard from '../GridCard/GridCard';

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
  name,
  apart_type,
  area,
  city,  
  currency,
  display_price,
  image_public_ids,
  slug,
  link_path,
  deviceType,
}) {
  return (
    <GridCard
      favorite={
        <Favourite
          onClick={(event) => {
            console.log(event);
          }}
        />
      }
      location={`${area} ${city}`}
      title={name}
      price={`$${display_price}/Montly`}
      viewDetailsBtn={
        <Link href={link_path} as={link_path} prefetch={false}>
          <a>
            <FiExternalLink /> View
          </a>
        </Link>
      }
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
          <img 
            key={index}
            src={url}
            alt={name}
          />
        ))}
      </Carousel>
    </GridCard>
  );
}
