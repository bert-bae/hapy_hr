import WeekdayCheckbox from './weekdayCheckbox';
import { deepCopy } from '../../utils/objectUtils';
import TextValidator from './textValidator';

export default function MenuItemForm({ item, menuItems, setMenuItems, menuItemIndex }) {
  const onCheckboxChange = (weekday, addWeekday) => {
    // Create copy of the menuItem object
    let updateMenuWeekday = deepCopy(menuItems);
    // Find if the weekday index number [0-6] exists in weekdays array in object...
    let indexOf = updateMenuWeekday[menuItemIndex].weekday.indexOf(weekday);;
    if (addWeekday) {
      if (indexOf === -1) {
        // Add the weekday to the weekdays array of the object
        updateMenuWeekday[menuItemIndex].weekday.push(weekday);
        setMenuItems(updateMenuWeekday);
      }
    } else {
      // If it does, remove it and update the menuItems index
      if (indexOf > -1) {
        updateMenuWeekday[menuItemIndex].weekday.splice(indexOf, 1);
        setMenuItems(updateMenuWeekday);
      }
    }
  }

  const updateMenuItems = (e, target, index, objKey) => {
    let copy = deepCopy(target);
    copy[index][objKey] = e.target.value;
    setMenuItems(copy);
  }

  return (
    <div className="menu-item-form">
      <div className="inner-container">
        <div className="form-subgroup">
          <label htmlFor="item-name[val]">Item Name</label>
          <TextValidator
            className="form-input"
            type="text"
            placeholder="E.g. House Burger and Fries"
            value={item.name}
            onChange={(e) => {
              updateMenuItems(e, menuItems, menuItemIndex, 'name');
            }}
            validators={['required', 'trim']}
            errorMessages={['This field is required', 'This field is required']}/>
        </div>
        <div className="form-subgroup">
          <label htmlFor="item-name[val]">Item Price</label>
          <TextValidator
            className="form-input"
            type="number"
            step="0.01"
            value="0.00"
            value={item.price}
            onChange={(e) => {
              updateMenuItems(e, menuItems, menuItemIndex, 'price');
            }}
            validators={['required', 'trim']}
            errorMessages={['This field is required', 'This field is required']}/>
        </div>
        <div className="form-subgroup">
          <label htmlFor="item-type[val]">Food or Drink</label>
          <select
            className="form-input"
            type="text"
            maxLength="150"
            name="item-type[val]"
            value={item.type}
            onChange={(e) => {
              updateMenuItems(e, menuItems, menuItemIndex, 'type');
            }}>
            <option value="" disabled>Select Type: Food or Drink</option>
            <option value="food">Food</option>
            <option value="drink">Drink</option>
          </select>
        </div>
      </div>
      <div className="weekday-selection">
        <WeekdayCheckbox value={0} weekday={"Mon"} isChecked={false} onCheckboxChange={onCheckboxChange}/>
        <WeekdayCheckbox value={1} weekday={"Tue"} isChecked={false} onCheckboxChange={onCheckboxChange}/>
        <WeekdayCheckbox value={2} weekday={"Wed"} isChecked={false} onCheckboxChange={onCheckboxChange}/>
        <WeekdayCheckbox value={3} weekday={"Thu"} isChecked={false} onCheckboxChange={onCheckboxChange}/>
        <WeekdayCheckbox value={4} weekday={"Fri"} isChecked={false} onCheckboxChange={onCheckboxChange}/>
        <WeekdayCheckbox value={5} weekday={"Sat"} isChecked={false} onCheckboxChange={onCheckboxChange}/>
        <WeekdayCheckbox value={6} weekday={"Sun"} isChecked={false} onCheckboxChange={onCheckboxChange}/>
      </div>
    </div>
  )
}