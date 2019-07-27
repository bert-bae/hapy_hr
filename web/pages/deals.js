import { useState, useEffect } from 'react';
import { getUserLocation } from '../utils/geolocationUtils';
import Head from 'next/head';
import axios from 'axios';

import Establishments from '../components/establishments';
import Loading from '../components/loading';

const DealPage = () => {
  const [loading, setLoading] = useState(true);
  const [locationPermission, setLocationPermission] = useState(null);
  const [establishments, setEstablishments] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const successLocation = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }
  
  const errorLocation = (error) => {
    console.log(`Error retrieving geolocation: ${error}`);
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
        // Retrieve establishments based on nearest top 10
        result = await axios.get(`http://localhost:5000/establishment/distance?latitude=${latitude}&longitude=${longitude}`);
        setEstablishments(result.data.establishments);
        setTimeout(() => {
          setLoading(false);
        }, 500)
      }

      // If permission is false, retrieve all data limit to 10
      if (locationPermission === false) {
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
    <div className="page-container">
      <Head>
        <title>HappyR | Find Happy Hour Deals</title>
        <meta description="HappyR | Discover new places near you with special happy hour deals!"></meta>
        <link href="/static/icons/happyr-icon.png" rel="icon" type="image/gif"></link>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.0/mapbox-gl.css' rel='stylesheet' />
      </Head>
      { locationPermission === false && 
        <h1>Oops! We can't help you find locations near you without geolocation enabled. Here's the full list for now! If you want us to sort it by the nearest locations, you an enable browser to let us know where you are. Don't worry, we aren't spying on you, this particular feature just requires your general location for it to work.</h1>
      }
      { loading && locationPermission &&
        <Loading/>
      }
      { !loading && locationPermission && establishments && establishments.length > 0 &&
        <Establishments establishments={establishments}/>
      }
    </div>
  )
}

export default DealPage;