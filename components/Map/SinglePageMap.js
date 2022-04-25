import React, { useState } from 'react';
import { Marker } from '@react-google-maps/api';
import { useSelector } from "react-redux";
import HotelInfoWindow from './MapInfoWindow';

const MakerImage = 'https://d1d0zx56gx2nys.cloudfront.net/map_icon.png';

const SingleMapDisplay = ({ location }) => {
	let hotelData = [];
	const [isOpen, setIsOpen] = useState(false);
	const [markerIndex, setMarkerIndex] = useState(0);
  const { apartment } = useSelector((state) => state.apartment);
  const { firstMonthRent } = useSelector((state) => state.booking);

	const infoWindowToggle = (index) => {
		setIsOpen(!isOpen);
		setMarkerIndex(index);
	};
	
	hotelData.push({
		lat: apartment.latitude,
		lng: apartment.longitude,
		id: apartment.id,
		title: apartment.name,
		thumbUrl: apartment.first_image,
		formattedAddress: apartment.area,
		price: firstMonthRent,
		currency: apartment.currency,
		link: '#.',
		number_of_beds: apartment.number_of_beds,
		number_of_bathrooms: apartment.number_of_bathrooms,
	});

	return hotelData.map((singlePostLoaction, index) => {
		return (
			<Marker
				key={index}
				icon={MakerImage}
				position={singlePostLoaction}
				onClick={() => {
					infoWindowToggle(singlePostLoaction.id);
				}}
			>
				{isOpen && markerIndex === singlePostLoaction.id ? (
					<HotelInfoWindow
						data={singlePostLoaction}
						onCloseClick={() => {
							infoWindowToggle(singlePostLoaction.id);
						}}
					/>
				) : (
					''
				)}
			</Marker>
		);
	});
};

const HotelMapMarkerSingle = (props) => {
	return <SingleMapDisplay {...props} />;
};

export default HotelMapMarkerSingle;
