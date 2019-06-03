import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

// react-bootstrap overrides specificity for all bs component styling. Bootstrap specific components are inline styled for this purpose
const cardStyle = {
  backgroundColor: '#FF9914',
  color: '#FFF',
  fontWeight: 'bold',
  backgroundImage: 'linear-gradient(to bottom left, #FF9914, #DB6218)'
}
const cardBodyStyle = {
  border: '1px solid #EF7F00',
}

export default function Establishments({ establishments }) {
  const formatted = establishments.map((place, key) => {
    const formatMenu = place.menu_item.map((item, key) => {
      return (
        <div className="menu-item" key={key}>
          <p className="item">{item.name}</p>
          <p className="price">${Number(item.price).toFixed(2)}</p>
        </div>
      )
    });

    const sortHours = (opHours) => {
      let sameDay = false;
      let currentDay = null;
      let weekdays = {
        0: "Sun",
        1: "Mon",
        2: "Tue",
        3: "Wed",
        4: "Thu",
        5: "Fri",
        6: "Sat"
      }
      let result = opHours.map((time, key) => {
        if (currentDay !== time.weekday) {
          sameDay = false;
          currentDay = time.weekday;
        } else {
          sameDay = true;
        }
        return (
          <div className="establishment-hours" key={key}>
            {!sameDay && <p className="weekday">{weekdays[time.weekday]}</p>}
            <p className="hour">{time.start} - {time.end}</p>
          </div>
        )
      })
      return result;
    }
    console.log(place.operational_hour);
    const formatHours = sortHours(place.operational_hour);
    return (
      <Card key={key}>
        <Accordion.Toggle as={Card.Header} variant="link" eventKey={key} style={cardStyle}>
          {place.name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={key}>
          <Card.Body style={cardBodyStyle}>
            <p className="location">{place.address_line}, {place.city}, {place.province}, {place.postal_code}</p>
            <p className="description">{place.description}</p>
            <hr/>
            <div className="establishment-details">
              <div className="establishment-menu">
                {formatMenu}
              </div>
              <div className="establishment-hours">
                {formatHours}
              </div>
            </div>
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
      <style jsx>{`
        .list-container {
          padding: 20px 50px;
        }
        .card-header {
          font-size: 50px;
        }
      `}</style>
    </div>
  )
}