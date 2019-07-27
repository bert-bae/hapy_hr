import getConfig from 'next/config';
import ReactMapGL from 'react-map-gl';
import { useState, useEffect } from 'react';
import MapMarker from './mapMarker';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export default function Map({place}) {
  const options = {
    width: '100%',
    height: 300,
    latitude: Number(place.latitude),
    longitude: Number(place.longitude),
    zoom: 15
  }
  const location = `${place.address_line}+${place.city}+${place.province}`;
  const [viewport, setViewport] = useState(null);

  useEffect(() => {
    setViewport(options);
  }, []);
  return (
    <ReactMapGL
      className="map-container"
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken={publicRuntimeConfig.MAPBOX_PK}
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}>
      <MapMarker location={location} latitude={options.latitude} longitude={options.longitude}/>
    </ReactMapGL>
  );
}