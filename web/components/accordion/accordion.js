import { useState, useEffect } from 'react';

export default function Accordion() {
  const [openContent, setOpenContent] = useState("");
  const toggleAccordion = () => {
    if (openContent) {
      setOpenContent("");
    } else {
      setOpenContent("open");
    }
  }
  const place = {
    name: "name of place",
    distance: 2,
  }
  return (
    <div className="custom-accordion">
      <button type="button" className="accordion-toggle" onClick={() => { toggleAccordion()}} >
        <p>{place.name}</p>
        <div className="icons-container">
          {place.distance &&
            <div className="distance-from">
              {place.distance.toFixed(1)}km
            </div>
          }
          <div className="op-time">
            Monday 2pm
          </div>
          {/* { hasFood && 
            <div className="icon icon-content food">Food</div> }
          { hasDrinks && 
            <div className="icon icon-content drinks">Drinks</div> }   */}
        </div>
      </button>
      <div className={`accordion-body ${openContent}`}>
      fasdfasdfasdfasdfasdfasdfasdf
      </div>
    </div>
  )
}