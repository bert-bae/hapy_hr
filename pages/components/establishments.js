import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import '../../styles/components/establishments.scss';
// react-bootstrap overrides specificity for all bs component styling. Bootstrap specific components are inline styled for this purpose
export default function Establishments({ establishments }) {
  const formatted = establishments.map((place, key) => {
    const weekdays = {
      0: "Sun",
      1: "Mon",
      2: "Tue",
      3: "Wed",
      4: "Thu",
      5: "Fri",
      6: "Sat"
    }
    const sortHours = (opHours) => {
      let sameDay = false;
      let currentDay = null;
      let result = opHours.map((time, key) => {
        if (currentDay !== time.weekday) {
          sameDay = false;
          currentDay = time.weekday;
        } else {
          sameDay = true;
        }
        return (
          <div className="weekday-time" key={key}>
            <p className="weekday">{sameDay ? "-" : weekdays[time.weekday]}</p>
            <p className="time">{time.start} - {time.end}</p>
          </div>
        )
      })
      return result;
    }

    const formatFoodMenu = place.menu_item.map((item, key) => {
      if (item.type === "food") {
        return (
          <div className="menu-item" key={key}>
            <p className="item">{item.name}</p>
            <p className="price">${Number(item.price).toFixed(2)}</p>
          </div>
        )
      }
    });

    const formatDrinkMenu = place.menu_item.map((item, key) => {
      if (item.type === "drink") {
        return (
          <div className="menu-item" key={key}>
            <p className="item">{item.name}</p>
            <p className="price">${Number(item.price).toFixed(2)}</p>
          </div>
        )
      }
    });

    const getToday = place.operational_hour.map((time, key) => {
      const today = new Date().getDay();
      if (time.weekday === today) {
        return (
          <div className="icon-content" key={key}>{weekdays[time.weekday]}: {time.start} - {time.end}</div>
        )
      }
    })

    const formatHours = sortHours(place.operational_hour);

    return (
      <Card key={key}>
        <Accordion.Toggle as={Card.Header} variant="link" eventKey={key}>
          <p>{place.name}</p>
          <div className="icons-container">
            <div className="op-time">
              {getToday}
            </div>
            { formatFoodMenu.length > 0 && 
              <div className="icon icon-content food">Food</div> }
            { formatDrinkMenu.length > 0 && 
              <div className="icon icon-content drinks">Drinks</div> }  
          </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={key}>
          <Card.Body>
            <p className="location">{place.address_line}, {place.city}, {place.province}, {place.postal_code}</p>
            <p className="description">{place.description}</p>
            <hr/>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Col sm={3}>
                <Nav variant="pills" className="flex-row">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    hello
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    hello
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Tab.Container>
            {/* <div className="establishment-details">
              <div className="establishment-menu">
                <p className="subheader">Drinks</p>
                <hr/>
                {formatDrinkMenu}
                <p className="subheader">Food</p>
                <hr/>
                {formatFoodMenu}
              </div>
              <div className="establishment-hours">
                <p className="subheader">Happy Hours</p>
                <hr/>
                {formatHours}
              </div>
            </div> */}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    )
  })
  return (
    <div className="list-container">
      <Accordion defaultActiveKey="0">
        {formatted}
      </Accordion>
    </div>
  )
}