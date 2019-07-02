import {useState, useEffect} from 'react';
import axios from 'axios';
import { setVoucherDate } from '../utils/dateUtils';
import '../styles/components/dayVoucher.scss';

export default function DayVoucher({ establishmentId }) {
  const [voucher, setVoucher] = useState(null);
  const createVoucher = async () => {
    let setVoucher = await axios.post(`http://localhost:5000/voucher/${establishmentId}/set`, {
      userId: 1,
      expiresAt: setVoucherDate(new Date),
    });
    console.log(setVoucher);
  }
  return (
    <div className="voucher-container">
      { !voucher &&
        <p className="subheader">Are you on the go and busy? Save a happy hour deal for later!</p>
      }
      { !voucher && 
        <button type="button" className="get-voucher" onClick={() => { createVoucher() }}>Get Day Voucher</button>
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