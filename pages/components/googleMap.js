import '../../styles/components/googleMaps.scss';
import getConfig from 'next/config';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export default function GoogleMap({place}) {
  const location = encodeURIComponent(`${place.address_line} ${place.city}, ${place.province}`);
  return (
    <div className="map-container">
      <iframe
        className="google-maps"
        frameBorder="0"
        src={`https://www.google.com/maps/embed/v1/place?key=${publicRuntimeConfig.GOOGLE_API}
        &q=${location}`} allowFullScreen>
      </iframe>
    </div>
  )
}