import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import '../../styles/components/detailTabs.scss';

export default function WeekTabs({place, setHasFood, setHasDrinks}) {
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date().getDay();
  
  const formatTabs = weekdays.map((day, index) => {
    return (
      <Nav.Item className="day-tab">
        <Nav.Link eventKey={`tab-${index}`}>{day}</Nav.Link>
      </Nav.Item>
    )
  })
  
  const constructDayDetails = weekdays.map((day, key) => {
    const opHours = place.operational_hour;
    let menuItems = place.menu_item;
    let checked = [];
    let dayHour, dayDrinks, dayFood;
    dayHour = opHours.map((time) => {
      if (time.weekday === key) {
        return (
          <p className="hours">{time.start} - {time.end}</p>
        )
      }
    })

    dayDrinks = menuItems.map((item, index) => {
      if (item.weekday.includes(key) || item.weekday.includes(7) && item.type === "drink") {
        setHasDrinks(true);
        checked.push(index)
        return (
          <div className="menu-item">
            <p className="item">{item.name}</p>
            <p className="price">${item.price.toFixed(2)}</p>
          </div>
        )
      }
    })

    dayFood = menuItems.map((item, index) => {
      if (checked.includes(index)) {
        return;
      }
      if (item.weekday.includes(day) || item.weekday.includes(7) && item.type === "food") {
        setHasFood(true);
        return (
          <div className="menu-item">
            <p className="item">{item.name}</p>
            <p className="price">${item.price.toFixed(2)}</p>
          </div>
        )
      }
    })
    return (
      <Tab.Pane eventKey={`tab-${key}`}>
        <div className="op-hours">
          <p className="subheader">Happy Hours</p>
          {dayHour}
        </div>
        <div className="menu-section">
          <div className="food">
            <p className="subheader">Food</p>
            {dayFood}
          </div>
          <div className="drink">
            <p className="subheader">Drinks</p>
            {dayDrinks}
          </div>
        </div>
      </Tab.Pane>
    )
  })

  return (
    <div className="tabs-container">
      <Tab.Container defaultActiveKey={`tab-${today}`}>
        <Nav variant="pills" className="weekday-tabs">
          {formatTabs}
        </Nav>
        <Tab.Content>
          {constructDayDetails}
        </Tab.Content>
      </Tab.Container>
    </div>
  )
}