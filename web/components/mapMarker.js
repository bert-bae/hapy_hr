import { Marker } from 'react-map-gl';

export default function MapMarker({ place, isHome }) {
  const location = `${place.address_line}+${place.city}+${place.province}`;
  const latitude = Number(place.latitude);
  const longitude = Number(place.longitude);
  return (
    <>
    { isHome &&
      <Marker
        className="map-marker"
        latitude={latitude} 
        longitude={longitude} 
        offsetLeft={-20} 
        offsetTop={-10}>
      </Marker>
    }
    { !isHome && 
      <a href={`https://www.google.com/maps/place/${location}`}
          target="_blank">}>
        <Marker
          className="map-marker"
          latitude={latitude} 
          longitude={longitude} 
          offsetLeft={-20} 
          offsetTop={-10}>
        </Marker>
      </a>
      }
    </>
  )
}