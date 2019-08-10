import getConfig from 'next/config';
import { useState, useEffect } from 'react';
import popularAreas from '../../utils/constants/popularAreas';
import { mapBoxConfig } from '../../utils/constants/optionUtils';
import apiConstants from '../../utils/constants/apiConstants';
import axios from 'axios';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export default function SearchContainer(props) {
  const { setEstablishments, setViewport, longitude, latitude } = props;
  const [addressInput, setAddressInput] = useState("");
  const [areaSelection, setAreaSelection] = useState("Search by area");
  
  const getGeoDataFromAddress = async (e, address) => {
    if (e.key === 'Enter') {
      let proximity = '';
      if (longitude && latitude) {
        proximity = `${longitude}, ${latitude}`;
      }
      // https://docs.mapbox.com/api/search/#forward-geocoding
      const results = await axios.get(apiConstants.mapboxApi(`geocoding/v5/mapbox.places/${address}.json?proximity=${proximity}`, publicRuntimeConfig.MAPBOX_PK));
      const coord = results.data.features[0].geometry.coordinates;
      setViewport(mapBoxConfig('100%', '100%', coord[1], coord[0], 15))
      return true;
    }
    return false;
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
          onChange={(e) => { setAddressInput(e.target.value); }}
          onKeyPress={(e) => { getGeoDataFromAddress(e, addressInput); }}></input>
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