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
        price={`$${data?.price}/Monthly`}
        link_path={data.link}
      >
        <img src={data?.thumbUrl} alt={data?.title} />
      </GridCard>
    </InfoWindow>
  );
};

export default MapInfoWindow;
