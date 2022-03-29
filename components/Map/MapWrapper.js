import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const MapWrapper = ({ children, ...rest }) => {
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.GOOGLE_API_KEY,
	});

	if (loadError) {
		return <div>Map cannot be loaded right now, sorry.</div>;
	}
	return <>{isLoaded && <GoogleMap {...rest}>{children}</GoogleMap>}</>;
};

export default MapWrapper;
