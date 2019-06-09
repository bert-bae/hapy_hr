import '../../styles/components/googleMaps.scss';

export default function GoogleMap({place}) {
  const location = encodeURIComponent(`${place.address_line} ${place.city}, ${place.province}`);
  return (
    <iframe
      className="google-maps"
      frameborder="0"
      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBdEEgqgccpAkFZVdy2AIPCsrNOeJB7NT0
        &q=${location}`} allowfullscreen>
    </iframe>
  )
}