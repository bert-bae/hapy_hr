import { useState, useEffect } from 'react';
import AccordionSet from './accordionSet';

export default function Accordion(props) {
  const { establishments, selection, setSelection, setViewport } = props;
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
    let setProps = { index: `acc-${key}`, place, getToday, selection, setSelection, setViewport };
    return (
      <AccordionSet key={key} {...setProps}/>
    )
  });
  return (
    <div className="custom-accordion">
      {accordionSet}
    </div>
  )
}