import ReactMapGL from 'react-map-gl';
import { useState, useEffect } from 'react';
import MapMarker from './mapMarker';

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
    <div className="map-container">
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={process.env.MAPBOX_PK}
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}>
        <MapMarker place={place}/>
      </ReactMapGL>
    </div>
  );
}