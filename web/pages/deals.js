import { useState, useEffect } from 'react';
import { getUserLocation } from '../utils/geolocationUtils';
import Head from 'next/head';
import axios from 'axios';

import Establishments from '../components/establishments';
import Loading from '../components/loading';

// Dev process...
import Accordion from '../components/accordion/accordion';

const DealPage = () => {
  return (
    <>
      <h1>Coming soon... List of special deals near you</h1>
    </>
  )
}

export default DealPage;