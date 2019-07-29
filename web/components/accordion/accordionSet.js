import { useState, useEffect } from 'react';
import WeekTabs from '../weekTabs';
import { Col } from 'react-bootstrap';

export default function AccordionSet({ index, place, getToday, selection, setSelection }) {
  const [openContent, setOpenContent] = useState("");
  const toggleAccordion = () => {
    if (selection !== index) {
      setOpenContent("");
    } else {
      setOpenContent("open");
    }
  }

  useEffect(() => {
    toggleAccordion();
  }, [selection])

  return (
    <>
      <button 
        type="button" 
        className="accordion-toggle" 
        onClick={() => { setSelection(index);}}>
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