import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

// react-bootstrap overrides specificity for all bs component styling. Bootstrap specific components are inline styled for this purpose
const cardStyle = {
  backgroundColor: '#FF9914',
  color: '#FFF',
  fontWeight: 'bold',
  backgroundImage: 'linear-gradient(to bottom left, #FF9914, #DB6218)'
}

export default function Establishments({ establishments }) {
  const formatted = establishments.map((place, key) => {
    return (
      <Card key={key}>
        <Accordion.Toggle as={Card.Header} variant="link" eventKey={key} style={cardStyle}>
          {place.name}
        </Accordion.Toggle>
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