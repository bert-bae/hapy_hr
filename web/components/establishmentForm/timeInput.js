import { weekdays, timeSlots } from '../../utils/constants/selectConstants';
import { deepCopy } from '../../utils/objectUtils';
import SelectValidator from './selectValidator';

export default function TimeInput({ happyTimeIndex, time, happyTimes, setHappyTimes }) {
  const updateHappyTimes = (e, target, index, objKey) => {
    let copy = deepCopy(target);
    copy[index][objKey] = e.target.value;
    setHappyTimes(copy);
  }

  return (
    <div className="time-input-container">
      <div className="form-subgroup">
        <label htmlFor="weekday">Weekday</label>
        <SelectValidator 
          className="form-input"
          value={time.weekday}
          onChange={(e) => { updateHappyTimes(e, happyTimes, happyTimeIndex, 'weekday');}}
          options={weekdays}
          validators={['required', 'trim']}
          errorMessages={['This field is required', 'This field is required']}/>
      </div>
      <div className="form-subgroup">
        <label htmlFor="start">Start</label>
        <SelectValidator 
          className="form-input"
          value={time.start}
          onChange={(e) => { updateHappyTimes(e, happyTimes, happyTimeIndex, 'start') }}
          options={timeSlots}
          validators={['required', 'trim']}
          errorMessages={['This field is required', 'This field is required']}/>
      </div>
      <div className="form-subgroup">
        <label htmlFor="end">End</label>
        <SelectValidator
          className="form-input"
          value={time.end}
          onChange={(e) => {  updateHappyTimes(e, happyTimes, happyTimeIndex, 'end') }}
          options={timeSlots}
          validators={['required', 'trim']}
          errorMessages={['This field is required', 'This field is required']}/>
      </div>
    </div>
  )
}