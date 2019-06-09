import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import WeekTabs from './weekTabs';
import GoogleMap from './googleMap';
import { useEffect, useState } from 'react';

import '../../styles/components/establishments.scss';

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
            { hasFood > 0 && 
              <div className="icon icon-content food">Food</div> }
            { hasDrinks > 0 && 
              <div className="icon icon-content drinks">Drinks</div> }  
          </div>
        </Accordion.Toggle>

        <Accordion.Collapse eventKey={key}>
          <Card.Body>
            <p className="location">{place.address_line}, {place.city}, {place.province}, {place.postal_code}</p>
            <p className="description">{place.description}</p>
            <hr/>
            <div className="establishment-content">
              <WeekTabs place={place} setHasFood={setHasFood} setHasDrinks={setHasDrinks}/>
              <GoogleMap place={place}/>
            </div>
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