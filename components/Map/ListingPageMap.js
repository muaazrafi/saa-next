import React, { useState } from 'react';
import { Marker } from '@react-google-maps/api';
import HotelInfoWindow from './MapInfoWindow';

const MakerImage = 'https://d1d0zx56gx2nys.cloudfront.net/map_icon.png';

const HotelMapMarkerCluster = ({ location, clusterer }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [markerIndex, setMarkerIndex] = useState(0);
	let hotelData = [];

	const infoWindowToggle = (index) => {
		setIsOpen(!isOpen);
		setMarkerIndex(index);
	};
	location &&
		location.forEach((item) => {
			hotelData.push({
				id: item.id,
				lat: parseFloat(item.latitude),
				lng: parseFloat(item.longitude),
				title: item.title,
				thumbUrl: item.image_public_ids[0],
				formattedAddress: `${item.name}`,
				price: item.display_price,
				currency: item.currency,
			});
		});

	return hotelData.map((singlePostLocation, index) => {
		return (
			<Marker
				key={index}
				icon={MakerImage}
				clusterer={clusterer}
				position={singlePostLocation}
				onClick={() => infoWindowToggle(singlePostLocation.id)}
			>
				{isOpen && markerIndex === singlePostLocation.id ? (
					<HotelInfoWindow
						data={singlePostLocation}
						onCloseClick={() => infoWindowToggle(singlePostLocation.id)}
					/>
				) : (
					''
				)}
			</Marker>
		);
	});
};

export default HotelMapMarkerCluster;
