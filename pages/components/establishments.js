import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

export default function Establishments({ establishments }) {
  const formatted = establishments.map((place, key) => {
    return (
      <Card key={key}>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey={key}>
            {place.name}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={key}>
          <Card.Body>
            <p className="location">{place.address_line}, {place.city}, {place.province}, {place.postal_code}</p>
            <hr/>
            <p className="description">{place.description}</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    )
  })
  return (
    <Accordion defaultActiveKey="0">
      {formatted}
    </Accordion>
      )
}