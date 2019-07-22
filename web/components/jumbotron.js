import { useState, useEffect } from 'react';
import { getUserLocation } from '../utils/geolocationUtils';

import Link from 'next/link';

export default function Jumbotron({ imgSrc, mainHeader, subHeader, searchInput}) {
  // const [addressInput, setAddressInput] = useState("");
  const [locationPermission, setLocationPermission] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    console.log(getUserLocation());
    // TODO: Once you get user location, determine if access is provided...
    // If it is not, re-request for permission everytime the link is pressed...
    // If it is, set the latitude and longitude
  }, []);

  return (
    <div>
      <div className="jumbotron-container" style={{backgroundImage: `url('${imgSrc}')`}}>
        <h1>{mainHeader}</h1>
        <p>{subHeader}</p>
        <Link href={{ pathname: '/deals/', query: { latitude, longitude } }} as='/deals'>
          <a className="link-option">Find Places Near Me</a>
        </Link>
        {/* { searchInput && 
          <div className="input-container">
            <input type="text" 
              placeholder="Search near your address!" 
              value={addressInput} 
              onChange={(e) => {setAddressInput(e.target.value);}}></input>
          </div>
        } */}
      </div>
      <style jsx>{`
        .jumbotron-container {
          height: 350px;
          width: 100%;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: 50%;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .jumbotron-container:before {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          content: "";
          background-color: black;
          opacity: 0.7;
          z-index: -1;
        }
        h1 {
          font-size: 32px;
          margin: 0 0 15px 0;
          text-align: center;
          color: #FFF;
          opacity: 0.9;
        }
        p {
          font-size: 20px;
          margin: 0 0 15px 0;
          color: #FFF;
          opacity: 0.7;
        }
        .input-container {
          max-width: 500px;
          width: 90%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        input {
          width: calc(75% - 10px);
          height: 19px;
          border-radius: 8px;
          margin-right: 5px;
          padding: 4px 10px;
          border: 1px solid rgba(0, 0, 0, 1);
        }
        input:focus {
          outline: none;
        }
        a {
          width: 25%;
          font-weight: 750;
          border: 1px solid #ffc424;
          background-color: transparent;
          color: #ffc424;
          text-decoration: none;
          padding: 2px 0;
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        a:hover {
          color: #FFF;
          background-color:#ffc424;
          transition: all 0.2s;
          // Text Shadow... refer to https://owumaro.github.io/text-stroke-generator/
          text-shadow: rgb(0, 0, 0) 1px 0px 0px, rgb(0, 0, 0) 0.540302px 0.841471px 0px, rgb(0, 0, 0) -0.416147px 0.909297px 0px, rgb(0, 0, 0) -0.989992px 0.14112px 0px, rgb(0, 0, 0) -0.653644px -0.756802px 0px, rgb(0, 0, 0) 0.283662px -0.958924px 0px, rgb(0, 0, 0) 0.96017px -0.279415px 0px;
        }
      `}</style>
    </div>
  )
}