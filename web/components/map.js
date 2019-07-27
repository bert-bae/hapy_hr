import getConfig from 'next/config';
import ReactMapGL, { Marker } from 'react-map-gl';
import { useState, useEffect } from 'react';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export default function Map({place}) {
  const options = {
    width: '100%',
    height: 300,
    latitude: Number(place.latitude),
    longitude: Number(place.longitude),
    zoom: 15
  }
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
      <Marker 
        latitude={options.latitude} 
        longitude={options.longitude} 
        offsetLeft={-20} 
        offsetTop={-10}>
        <div className="map-marker"></div>
      </Marker>
    </ReactMapGL>
  );
}