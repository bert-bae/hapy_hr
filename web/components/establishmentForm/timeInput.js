import { useState, useEffect } from 'react';
import { weekdays } from '../../utils/constants/dateConstants';
import { deepCopy } from '../../utils/objectUtils';

export default function TimeInput({ happyTimeIndex, time, happyTimes, setHappyTimes }) {
  const formatWeekdayOptions = weekdays.map((weekday, i) => {
    return <option value={i}>{weekday}</option>
  });

  const updateHappyTimes = (e, target, index, objKey) => {
    let copy = deepCopy(target);
    copy[index][objKey] = e.target.value;
    setHappyTimes(copy);
  }

  return (
    <div className="form-subgroup">
      <select className="form-input"
        value={time.weekday}
        onChange={(e) => { updateHappyTimes(e, happyTimes, happyTimeIndex, 'weekday');}}>
        {formatWeekdayOptions}
      </select>
      <input type="text" name="start-time" placeholder="12:00pm" className="form-input"
        value={time.start}
        onChange={(e) => { updateHappyTimes(e, happyTimes, happyTimeIndex, 'start') }}/>
      <input type="text" name="end-time" placeholder="3:00pm" className="form-input"
        value={time.end}
        onChange={(e) => {  updateHappyTimes(e, happyTimes, happyTimeIndex, 'end') }}/>
    </div>
  )
}