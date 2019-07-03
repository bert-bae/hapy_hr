import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import WeekTabs from './weekTabs';
import GoogleMap from './googleMap';
import DayVoucher from './dayVoucher';
import Col from 'react-bootstrap/Col';
import { useAuth0 } from "../utils/Auth/react-auth0-wrapper";
import { useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/components/establishments.scss';

export default function Establishments({ establishments }) {
  const { isAuthenticated, user } = useAuth0();
  const [hasFood, setHasFood] = useState(false);
  const [hasDrinks, setHasDrinks] = useState(false);
  const [voucher, setVoucher] = useState({ id: null });
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const formatted = establishments.map((place, key) => {
    const getToday = place.operational_hour.map((time, key) => {
      const today = new Date().getDay();
      if (time.weekday === today) {
        return (
          <div className="icon-content" key={key}>{weekdays[time.weekday]}: {time.start} - {time.end}</div>
        )
      }
    })
    return (
      <Card key={key}>
        <Accordion.Toggle as={Card.Header} variant="link" eventKey={key}>
          <p>{place.name}</p>
          <div className="icons-container">
            <div className="op-time">
              {getToday}
            </div>
            {/* { hasFood && 
              <div className="icon icon-content food">Food</div> }
            { hasDrinks && 
              <div className="icon icon-content drinks">Drinks</div> }   */}
          </div>
        </Accordion.Toggle>

        <Accordion.Collapse eventKey={key}>
          <Card.Body>
            <p className="location">{place.address_line}, {place.city}, {place.province}, {place.postal_code}</p>
            <p className="description">{place.description}</p>
            <hr/>
            <div className="establishment-content">
              <Col className="inner-container" lg={6} md={6} sm={12}>
                <WeekTabs place={place} setHasFood={setHasFood} setHasDrinks={setHasDrinks}/>
              </Col>
              <Col className="inner-container" lg={6} md={6} sm={12}>
                <DayVoucher establishmentId={place.id} voucher={voucher} setVoucher={setVoucher} user={user}/>
              </Col>
            </div>
            <GoogleMap place={place}/>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    )
  })

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
      <Accordion>
        {formatted}
      </Accordion>
    </div>
  )
}