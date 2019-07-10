import Router from 'next/router';
import '../styles/components/footer.scss';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-col">
        Company Logo, copyright, etc.
      </div>
      <div className="footer-col">
        <p className="footer-header">Deals Near You</p>
        <a className="footer-link" onClick={() => { Router.push('/') }}>Home</a>
        <a className="footer-link" onClick={() => { Router.push('/deals') }}>Deals</a>
        <a className="footer-link" onClick={() => { Router.push('/trending') }}>Trending</a>
      </div>
      <div className="footer-col">
        <p className="footer-header">For Restaurants & Bars</p>
        <a className="footer-link" onClick={() => { Router.push('/establishments') }}>Restaurants/Bars</a>
        <a className="footer-link" onClick={() => { Router.push('/voucher') }}>What is a Voucher</a>
        <a className="footer-link" onClick={() => { Router.push('/about') }}>About</a>
      </div>
    </div>
  )
}