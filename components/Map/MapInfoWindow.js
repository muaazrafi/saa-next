import React from "react";
import Link from "next/link";
import { InfoWindow } from "@react-google-maps/api";
import GridCard from "../GridCard/GridCard";

const MapInfoWindow = ({ data, onCloseClick }) => {
  const position = { lat: data?.lat, lng: data?.lng };
  return (
    <InfoWindow
      position={position}
      options={{ pixelOffset: new window.google.maps.Size(0, -40) }}
      id={data?.id}
      onCloseClick={onCloseClick}
    >
      <GridCard
        className="info_window_card"
        location={data?.formattedAddress}
        title={data?.title}
        price={`${data?.price}/Monthly`}
        link_path={data.link}
        currency={data?.currency}
        isMap={true}
        number_of_beds={data?.number_of_beds}
        number_of_bathrooms={data?.number_of_bathrooms}
        isFavorite={false}
      >
        <img src={data?.thumbUrl} alt={data?.title} style={{ height: '150px', objectFit: 'object-fit', width: '100%' }} />
      </GridCard>
    </InfoWindow>
  );
};

export default MapInfoWindow;
