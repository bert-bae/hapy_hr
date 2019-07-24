import { Spinner } from 'react-bootstrap';

export default function Loading() {
  return (
    <div className="loading-container">
      <p className="subheader">Loading...</p>
      <Spinner animation="grow" variant="warning" size="lg"/>
    </div>
  )
}