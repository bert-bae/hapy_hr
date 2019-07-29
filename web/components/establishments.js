import Accordion from '../components/accordion/accordion';
import Card from 'react-bootstrap/Card';
import WeekTabs from './weekTabs';
import Map from './map';
import DayVoucher from './dayVoucher';
import Col from 'react-bootstrap/Col';
import { useAuth0 } from "../utils/Auth/react-auth0-wrapper";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Establishments({ establishments, showMap }) {
  const { isAuthenticated, user } = useAuth0();
  const [hasFood, setHasFood] = useState(false);
  const [hasDrinks, setHasDrinks] = useState(false);
  const [voucher, setVoucher] = useState({ id: null });

  // Verifies if the user logging in has a valid voucher or not
  // If exists, set the correct establishment's voucher
  useEffect(() => {
    if (isAuthenticated && user.email) {
      axios.get(`http://localhost:5000/user/${encodeURIComponent(user.email)}/view`).then(res => {
        const userVoucher = res.data.user.voucher;
        if (userVoucher.length > 0) {
          setVoucher(userVoucher[0]);
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }, []) 
  // ..., []) >> Add this to the end of useEffect to make it so that it only fires on mount
  // If you don't add this, the setVoucher inside of it will trigger an infinite loop

  return (
    <div className="list-container">
      <Accordion establishments={establishments}/>
    </div>
  )
}