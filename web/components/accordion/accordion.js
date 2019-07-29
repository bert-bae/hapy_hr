import { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import WeekTabs from '../weekTabs';

export default function Accordion({ establishments }) {
  const [openContent, setOpenContent] = useState("");
  const toggleAccordion = () => {
    if (openContent) {
      setOpenContent("");
    } else {
      setOpenContent("open");
    }
  }

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const accordionSet = establishments.map((place, key) => {
    const getToday = place.operational_hour.map((time, key) => {
      const today = new Date().getDay();
      if (time.weekday === today) {
        return (
          <div className="icon-content" key={key}>{weekdays[time.weekday]}: {time.start} - {time.end}</div>
        )
      }
    })
    return (
      <div key={`acc-set-${key}`}>
        <button type="button" className="accordion-toggle" onClick={() => { toggleAccordion()}} >
          <p>{place.name}</p>
          <div className="icons-container">
            {place.distance &&
              <div className="distance-from">
                {place.distance.toFixed(1)}km
              </div>
            }
            <div className="op-time">
              {getToday}
            </div>
          </div>
        </button>
        <div className={`accordion-body ${openContent}`}>
          <p className="location">{place.address_line}, {place.city}, {place.province}, {place.postal_code}</p>
          <p className="description">{place.description}</p>
          <hr/>
          <div className="establishment-content">
            <Col className="inner-container" lg={12} md={12} sm={12}>
              <WeekTabs place={place}/>
            </Col>
            {/* { showVoucher && 
              <Col className="inner-container" lg={6} md={6} sm={12}>
                <DayVoucher establishmentId={place.id} voucher={voucher} setVoucher={setVoucher} user={user}/>
              </Col>
            } */}
            {/* { showMap &&
              <Map place={place}/>
            } */}
          </div>
        </div>
      </div>
    )
  });
  return (
    <div className="custom-accordion">
      {accordionSet}
    </div>
  )
}