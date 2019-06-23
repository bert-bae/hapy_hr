import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import WeekTabs from './weekTabs';
import GoogleMap from './googleMap';
import DayVoucher from './dayVoucher';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';

import '../styles/components/establishments.scss';

export default function Establishments({ establishments }) {
  const [hasFood, setHasFood] = useState(false);
  const [hasDrinks, setHasDrinks] = useState(false);
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
              <Col lg={6} md={6} sm={12}>
                <WeekTabs place={place} setHasFood={setHasFood} setHasDrinks={setHasDrinks}/>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <DayVoucher/>
              </Col>
            </div>
            <GoogleMap place={place}/>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    )
  })
  return (
    <div className="list-container">
      <Accordion>
        {formatted}
      </Accordion>
    </div>
  )
}