import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import '../../styles/components/establishments.scss';
// react-bootstrap overrides specificity for all bs component styling. Bootstrap specific components are inline styled for this purpose
export default function Establishments({ establishments }) {
  const formatted = establishments.map((place, key) => {

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
          <div className="weekday-time" key={key}>
            <p className="weekday">{sameDay ? "-" : weekdays[time.weekday]}</p>
            <p className="time">{time.start} - {time.end}</p>
          </div>
        )
      })
      return result;
    }

    const formatMenu = place.menu_item.map((item, key) => {
      return (
        <div className="menu-item" key={key}>
          <p className="item">{item.name}</p>
          <p className="price">${Number(item.price).toFixed(2)}</p>
        </div>
      )
    });

    const formatHours = sortHours(place.operational_hour);

    return (
      <Card key={key}>
        <Accordion.Toggle as={Card.Header} variant="link" eventKey={key}>
          {place.name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={key}>
          <Card.Body>
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
    </div>
  )
}