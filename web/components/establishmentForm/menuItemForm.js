export default function MenuItemForm({ item }) {
  console.log(item)
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
            value={item.name}></input>
        </div>
        <div className="form-control">
          <label htmlFor="item-name[val]">Item Price</label>
          <input
            className="form-input"
            type="number"
            step="0.01"
            value="0.00"
            name="item-price[val]"
            value={item.price}></input>
        </div>
      </div>
      <div className="weekday-selection">
        <div className="form-control checkbox">
          <input type="checkbox" name="monday" value="0"></input>
          <label htmlFor="monday">Monday</label>
        </div>
        <div className="form-control checkbox">
          <input type="checkbox" name="tuesday" value="1"></input>
          <label htmlFor="tuesday">Tuesday</label>
        </div>
        <div className="form-control checkbox">
          <input type="checkbox" name="wednesday" value="2"></input>
          <label htmlFor="wednesday">Wednesday</label>
        </div>
        <div className="form-control checkbox">
          <input type="checkbox" name="thursday" value="3"></input>
          <label htmlFor="thursday">Thursday</label>
        </div>
        <div className="form-control checkbox">
          <input type="checkbox" name="friday" value="4"></input>
          <label htmlFor="friday">Friday</label>
        </div>
        <div className="form-control checkbox">
          <input type="checkbox" name="saturday" value="5"></input>
          <label htmlFor="saturday">Saturday</label>
        </div>
        <div className="form-control checkbox">
          <input type="checkbox" name="sunday" value="6"></input>
          <label htmlFor="sunday">Sunday</label>
        </div>
      </div>
    </div>  
  )
}