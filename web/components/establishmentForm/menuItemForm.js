import { useState, useEffect } from 'react';
import WeekdayCheckbox from './weekdayCheckbox';

export default function MenuItemForm({ menuItems, setMenuItems, menuItemIndex }) {
  const [componentItemName, setComponentItemName] = useState("");
  const [componentItemPrice, setComponentItemPrice] = useState("");
  const onCheckboxChange = (weekday, addWeekday) => {
    // Create copy of the menuItem object
    let updateMenuWeekday = JSON.parse(JSON.stringify(menuItems));
    // Find if the weekday index number [0-6] exists in weekdays array in object...
    let indexOf = updateMenuWeekday[menuItemIndex].weekdays.indexOf(weekday);;
    if (addWeekday) {
      if (indexOf === -1) {
        // Add the weekday to the weekdays array of the object
        updateMenuWeekday[menuItemIndex].weekdays.push(weekday);
        setMenuItems(updateMenuWeekday);
      }
    } else {
      // If it does, remove it and update the menuItems index
      if (indexOf > -1) {
        updateMenuWeekday[menuItemIndex].weekdays.splice(indexOf, 1);
        setMenuItems(updateMenuWeekday);
      }
    }
  }

  return (
    <>
      <div className="inner-container">
        <div className="form-control">
          <label htmlFor="item-name[val]">Item Name</label>
          <input
            className="form-input"
            type="text"
            maxLength="150"
            name="item-name[val]"
            placeholder="E.g. House Burger and Fries"
            value={componentItemName}
            onChange={(e) => {
              let updateMenuItemName = JSON.parse(JSON.stringify(menuItems));
              updateMenuItemName[menuItemIndex].name = e.target.value;
              setComponentItemName(e.target.value);
              setMenuItems(updateMenuItemName);
            }}></input>
        </div>
        <div className="form-control">
          <label htmlFor="item-name[val]">Item Price</label>
          <input
            className="form-input"
            type="number"
            step="0.01"
            value="0.00"
            name="item-price[val]"
            value={componentItemPrice}
            onChange={(e) => {
              let updateMenuItemPrice = JSON.parse(JSON.stringify(menuItems));
              updateMenuItemPrice[menuItemIndex].price = e.target.value;
              setComponentItemPrice(e.target.value);
              setMenuItems(updateMenuItemPrice);
            }}></input>
        </div>
      </div>
      <div className="weekday-selection">
        <WeekdayCheckbox value={0} weekday={"Monday"} isChecked={false} onCheckboxChange={onCheckboxChange}/>
        <WeekdayCheckbox value={1} weekday={"Tuesday"} isChecked={false} onCheckboxChange={onCheckboxChange}/>
        <WeekdayCheckbox value={2} weekday={"Wednesday"} isChecked={false} onCheckboxChange={onCheckboxChange}/>
        <WeekdayCheckbox value={3} weekday={"Thursday"} isChecked={false} onCheckboxChange={onCheckboxChange}/>
        <WeekdayCheckbox value={4} weekday={"Friday"} isChecked={false} onCheckboxChange={onCheckboxChange}/>
        <WeekdayCheckbox value={5} weekday={"Saturday"} isChecked={false} onCheckboxChange={onCheckboxChange}/>
        <WeekdayCheckbox value={6} weekday={"Sunday"} isChecked={false} onCheckboxChange={onCheckboxChange}/>
      </div>
    </>
  )
}