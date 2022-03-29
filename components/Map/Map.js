import React from 'react';
import { MarkerClusterer } from '@react-google-maps/api';
import MapWrapper from './MapWrapper';
import HotelMapMarkerCluster from './ListingPageMap';
import HotelMapMarkerSingle from './SinglePageMap';

const Map = (props) => {
	const { multiple, location } = props;
	const handleClustererClick = (data) => {
		const markerClusterer = data.getMarkers();
		console.log(`Current clicked markers length: ${markerClusterer.length}`);
		console.log(markerClusterer);
	};

	console.log("Need to check location: ", location)

	return (
		<>
			{multiple ? (
				<MapWrapper
					id='map-multiple-location'
					zoom={14}
					center={{
						lat: props.location[0].latitude,
						lng: props.location[0].longitude,
					}}
				>
					<MarkerClusterer
						gridSize={60}
						averageCenter
						enableRetinaIcons={true}
						onClick={handleClustererClick}
					>
						{(clusterer) => (
							<HotelMapMarkerCluster
								location={location}
								clusterer={clusterer}
							/>
						)}
					</MarkerClusterer>
				</MapWrapper>
			) : (
				<MapWrapper
					id='map-single-location'
					mapContainerStyle={{
						height: '400px',
						width: '100%',
					}}
					zoom={14}
					center={{
						lat: location.location.lat,
						lng: location.location.lng,
					}}
				>
					<HotelMapMarkerSingle location={location} />
				</MapWrapper>
			)}
		</>
	);
};

export default Map;
