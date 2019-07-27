import { Marker } from 'react-map-gl';

export default function MapMarker({ location, latitude, longitude }) {
  return (
    <a href={`https://www.google.com/maps/place/${location}`}
      target="_blank">
      <Marker
        className="map-marker"
        latitude={latitude} 
        longitude={longitude} 
        offsetLeft={-20} 
        offsetTop={-10}>
      </Marker>
    </a>
  )
}