import { useState, useEffect, useRef } from 'react';
import WeekTabs from '../weekTabs';
import { Col } from 'react-bootstrap';

import { mapBoxConfig } from '../../utils/constants/optionUtils'

export default function AccordionSet({ index, place, getToday, selection, setSelection, setViewport }) {
  const [openContent, setOpenContent] = useState("");
  const accRef = useRef(null);
  // TODO... Scroll to selection is not really working correctly...
  // Suspect it may have to do with the max-height transition with collapse, but examine later
  const scrollToRef = (ref) => {
    document.getElementsByClassName('list-container')[0].scrollTo(0, ref.current.offsetTop);
  };
  const toggleAccordion = () => {
    if (selection !== index) {
      setOpenContent("");
    } else {
      setOpenContent("open");
      scrollToRef(accRef);
    }
  }

  useEffect(() => {
    toggleAccordion();
  }, [selection])

  return (
    <>
      <button 
        ref={accRef}
        type="button"
        className="accordion-toggle" 
        onClick={() => { 
          const longitude = Number(place.longitude);
          const latitude = Number(place.latitude);
          setViewport(mapBoxConfig('100%', '100%', latitude, longitude, 15));
          setSelection(index);
        }}>
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
        </div>
      </div>
    </>
  )
}