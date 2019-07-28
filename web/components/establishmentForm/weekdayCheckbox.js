import { useState, useEffect } from 'react';

export default function WeekdayCheckbox({ value, weekday, onCheckboxChange}) {
  const [componentWeekdaySelection, setComponentWeekdaySelection] = useState(false);
  
  return (
    <div className="form-subgroup checkbox">
      <input 
        type="checkbox" 
        name="weekday" 
        value={value} 
        checked={componentWeekdaySelection} 
        onChange={() => {
          // If current weekday is selected, change it to false... otherwise, change it to true
          const isAdd = componentWeekdaySelection ? false : true;
          setComponentWeekdaySelection(isAdd);
          if (isAdd) {
            onCheckboxChange(value, true);
          } else {
            onCheckboxChange(value, false);
          }
        }}></input>
      <label htmlFor="weekday">{weekday}</label>
    </div>
  )
}