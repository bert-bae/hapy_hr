import WeekdayCheckbox from './weekdayCheckbox';
import { deepCopy } from '../../utils/objectUtils';
import { itemType } from '../../utils/constants/selectConstants';
import TextValidator from './textValidator';
import SelectValidator from './selectValidator';

export default function MenuItemForm({ item, menuItems, setMenuItems, menuItemIndex, deleteFromSet }) {
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
          <SelectValidator
            className="form-input"
            value={item.type}
            onChange={(e) => {
              updateMenuItems(e, menuItems, menuItemIndex, 'type');
            }}
            options={itemType}
            validators={['required', 'trim']}
            errorMessages={['This field is required', 'This field is required']}/>
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
      <button className="delete-button" onClick={() => {deleteFromSet(menuItemIndex, menuItems, setMenuItems);}}>Remove</button>
    </div>
  )
}