import { useState, useEffect } from 'react';

export default function SearchContainer() {
  const [addressInput, setAddressInput] = useState("");
  const [areaSelection, setAreaSelection] = useState(null);
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
          onChange={(e) => { setAreaSelection(e.target.value); }}>
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