import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

export default function WeekTabs({place}) {
  // const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const weekdays = ['Sun'];  
  const formatTabs = weekdays.map((day, index) => {
    return (
      <Nav.Item>
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
        checked.push(index)
        return (
          <div className="menu-item">
            <p className="item">{item.name}</p>
            <p className="price">{item.price}</p>
          </div>
        )
      }
    })

    dayFood = menuItems.map((item, index) => {
      if (checked.includes(index)) {
        return;
      }
      if (item.weekday.includes(day) || item.weekday.includes(7) && item.type === "food") {
        return (
          <div className="menu-item">
            <p className="item">{item.name}</p>
            <p className="price">{item.price}</p>
          </div>
        )
      }
    })
    return (
      <Tab.Pane eventKey={`tab-${key}`}>
        <div className="op-hours">
          <p className="subheader">Happy Hours</p>
          <hr/>
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
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Col sm={3}>
        <Nav variant="pills" className="flex-row">
          {formatTabs}
        </Nav>
      </Col>
      <Col sm={9}>
        <Tab.Content>
          {constructDayDetails}
        </Tab.Content>
      </Col>
    </Tab.Container>
  )
}