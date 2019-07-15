import { useState, useEffect } from 'react';

export default function MenuItemForm({ item, menuItems, setMenuItems, menuItemIndex }) {
  const [componentItemName, setComponentItemName] = useState("");
  const [componentItemPrice, setComponentItemPrice] = useState("");

  useEffect(() => {
    if (item) {
      setComponentItemName(item.name);
      setComponentItemPrice(item.price);
    }
  }, [])

  return (
    <div className="form-group menu-item-form">
      <label htmlFor="menu-item">Menu Item</label>
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
        <div className="form-control checkbox">
          <input type="checkbox" name="weekday" value="0"></input>
          <label htmlFor="weekday">Monday</label>
        </div>
        <div className="form-control checkbox">
          <input type="checkbox" name="weekday" value="1"></input>
          <label htmlFor="weekday">Tuesday</label>
        </div>
        <div className="form-control checkbox">
          <input type="checkbox" name="weekday" value="2"></input>
          <label htmlFor="weekday">Wednesday</label>
        </div>
        <div className="form-control checkbox">
          <input type="checkbox" name="weekday" value="3"></input>
          <label htmlFor="weekday">Thursday</label>
        </div>
        <div className="form-control checkbox">
          <input type="checkbox" name="weekday" value="4"></input>
          <label htmlFor="weekday">Friday</label>
        </div>
        <div className="form-control checkbox">
          <input type="checkbox" name="weekday" value="5"></input>
          <label htmlFor="weekday">Saturday</label>
        </div>
        <div className="form-control checkbox">
          <input type="checkbox" name="weekday" value="6"></input>
          <label htmlFor="weekday">Sunday</label>
        </div>
      </div>
    </div>  
  )
}