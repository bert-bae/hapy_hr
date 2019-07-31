import getConfig from 'next/config';
import ReactMapGL from 'react-map-gl';
import { useState, useEffect } from 'react';
import { getUserLocation } from '../../utils/geolocationUtils';
import { mapBoxConfig } from '../../utils/constants/optionUtils';
import axios from 'axios';


import SearchContainer from './searchContainer';
import Loading from '../loading';
import Establishments from '../establishments';
import MapMarker from '../mapMarker';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export default function HomeMap() {
  const [loading, setLoading] = useState(true);
  const [locationPermission, setLocationPermission] = useState(null);
  const [establishments, setEstablishments] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [viewport, setViewport] = useState(null);
  const [selection, setSelection] = useState(null);
  const successLocation = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }
  
  const errorLocation = (error) => {
    console.log(`Error retrieving geolocation:`);
    console.log(error);
  }
  
  useEffect(() => {
    async function getInitialData() {
      let result;
      // Verify user geolocation permission...
      const permission = await navigator.permissions.query({name:'geolocation'});
      if (permission.state === 'granted') {
        setLocationPermission(true);
      } else {
        setLocationPermission(false);
      }
      getUserLocation(successLocation, errorLocation);

      // If permission is true, find the geolocation of user
      if (locationPermission && latitude && longitude) {
        setViewport(mapBoxConfig('100%', 500, latitude, longitude, 15));

        // Retrieve establishments based on nearest top 10
        result = await axios.get(`http://localhost:5000/establishment/distance?latitude=${latitude}&longitude=${longitude}`);
        setEstablishments(result.data.establishments);
        setTimeout(() => {
          setLoading(false);
        }, 500)
      }

      // If permission is false, retrieve all data limit to 10
      if (!locationPermission) {
        result = await axios.get('http://localhost:5000/establishment');
        setEstablishments(result.data.establishments);
        setTimeout(() => {
          setLoading(false);
        }, 500)
      }

    };
    getInitialData();
    // Only track changes as latitude and longitude changes
    // Potential issue... How often will this trigger an API request? If a user is moving, might need to consider that factor and put a timer on it.
  }, [latitude, longitude, locationPermission]);

  return (
    <div className="home-container">
      { loading && locationPermission &&
        <Loading/>
      }
      { !loading && establishments && establishments.length > 0 &&
        <div>
          <SearchContainer 
            setEstablishments={setEstablishments}
            viewport={viewport}
            setViewport={setViewport}/>
          <div className="home-listings">
            <Establishments 
              establishments={establishments}
              selection={selection}
              setSelection={setSelection}
              showMap={false}/>
            <div className="map-container">
              <ReactMapGL
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxApiAccessToken={publicRuntimeConfig.MAPBOX_PK}
                {...viewport}
                onViewportChange={(viewport) => setViewport(viewport)}>
                { establishments.map((place, key) => {
                    return (
                      <a key={key} onClick={() => { setSelection(`acc-${key}`);}}>
                        <MapMarker place={place} isHome={true}/>
                      </a>
                    )
                  })
                }
              </ReactMapGL>
            </div>
          </div>
        </div>
      }
    </div>
  );
}