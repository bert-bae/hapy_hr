import { useState, useEffect } from 'react';
import { deepCopy } from '../../utils/objectUtils';
import { mapBoxConfig } from '../../utils/constants/optionUtils';

export default function SearchContainer(props) {
  const { setEstablishments, setViewport, viewport } = props;
  const [addressInput, setAddressInput] = useState("");
  const [areaSelection, setAreaSelection] = useState("Search by area");
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
            // TODO...set value of the selection options with data sets of latitude and longitude
            // Pass as latitude and longitude in arguments below and uncomment (requires network access);
            // setViewport(mapBoxConfig('100%', 500, latitude, longitude, 15))  
            setAreaSelection(e.target.value);
          }}>
          <option disabled selected>Search by area</option>
          <option value="Gastown">Gastown</option>
          <option value="Hastings">Hastings</option>
          <option value="Strathcona">Strathcona</option>
          <option value="False Creek">False Creek</option>
          <option value="Richmond">Richmond</option>
        </select>
      </div>
    </div>
  )
}