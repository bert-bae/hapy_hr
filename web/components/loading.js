import { Spinner } from 'react-bootstrap';

export default function Loading() {
  return (
    <div className="loading-container">
      <img src="/static/images/logo-colored.png" alt="Company Logo"></img>
      <Spinner animation="grow" variant="warning" size="lg"/>
    </div>
  )
}