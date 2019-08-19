import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuth0 } from "../utils/Auth/react-auth0-wrapper";
import Accordion from '../components/accordion/accordion';

export default function Establishments(props) {
  const [hasFood, setHasFood] = useState(false);
  const [hasDrinks, setHasDrinks] = useState(false);
  const { isAuthenticated, user } = useAuth0();
  const [voucher, setVoucher] = useState({ id: null });

  // Verifies if the user logging in has a valid voucher or not
  // If exists, set the correct establishment's voucher
  useEffect(() => {
    if (isAuthenticated && user.email) {
      axios.get(`${process.env.DATABASE_URL}/user/${encodeURIComponent(user.email)}/view`).then(res => {
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
      <Accordion {...props}/>
    </div>
  )
}