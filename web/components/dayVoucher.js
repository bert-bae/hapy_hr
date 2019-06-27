import {useState, useEffect} from 'react';
import '../styles/components/dayVoucher.scss';

export default function DayVoucher() {
  const [voucher, setVoucher] = useState(null);
  const createVoucher = () => {
    // TODO CREATE DATABASE FOR VOUCHER, USER, AND EXPIRATION
    return;
  }
  createVoucher();
  return (
    <div className="voucher-container">
      { !voucher &&
        <p className="subheader">Are you on the go and busy? Save a happy hour deal for later!</p>
      }
      { !voucher && 
        <button type="button" className="get-voucher" onClick={() => { setVoucher(true) }}>Get Day Voucher</button>
      }

      { voucher && 
        <p className="subheader">Redeem your voucher in person before it expires!</p>
      }
      { voucher && 
        <button type="button" className="redeem-voucher" onClick={() => { console.log('clicked') }}>
          <p className="subheader">Redeem Voucher</p>
          <p className="voucher-timer">Expires at: 7:00pm</p>
        </button>
      }
    </div>
  )
}