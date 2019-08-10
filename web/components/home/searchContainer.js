import { useState, useEffect } from 'react';
import popularAreas from '../../utils/constants/popularAreas';
import { mapBoxConfig } from '../../utils/constants/optionUtils';

export default function SearchContainer(props) {
  const { setEstablishments, setViewport, viewport } = props;
  const [addressInput, setAddressInput] = useState("");
  const [areaSelection, setAreaSelection] = useState("Search by area");
  const getGeoDataFromAddress = (address) => {
    // TODO... take the address and convert to geolocation data
    // Research = Does mapbox have this built in? If not use Google API
  }
  const formatAreas = popularAreas.areas.map((area) => {
    return <option value={`{"latitude": ${area.latitude}, "longitude": ${area.longitude}}`}>{area.name}</option>
  })
  const formatStations = popularAreas.stations.map((station) => {
    return <option value={`{"latitude": ${station.latitude}, "longitude": ${station.longitude}}`}>{station.name}</option>
  })
  return (
    <div className="search-container">
      <div className="form-subgroup">
        <label htmlFor="location-name">Search by Address</label>
        <input 
          className="form-input" 
          type="text" 
          placeholder="Search by address"
          value={addressInput}
          onChange={(e) => { setAddressInput(e.target.value); }}></input>
      </div>
      <div className="form-subgroup">
        <label htmlFor="location-area">Search by Area</label>
        <select 
          className="form-input"
          value={areaSelection}
          onChange={(e) => {
            const latlon = JSON.parse(e.target.value);
            setViewport(mapBoxConfig('100%', '100%', latlon.latitude, latlon.longitude, 15));            
            setAreaSelection(e.target.value);
          }}>
          <option disabled>Search by area</option>
          <optgroup>
            <option disabled>Popular Areas</option>
            {formatAreas}
          </optgroup>
          <optgroup>
            <option disabled>Near Stations</option>
            {formatStations}
          </optgroup>
        </select>
      </div>
    </div>
  )
}