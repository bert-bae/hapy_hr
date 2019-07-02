import {useState, useEffect} from 'react';
import axios from 'axios';
import { setVoucherDate } from '../utils/dateUtils';
import '../styles/components/dayVoucher.scss';

export default function DayVoucher({ establishmentId, voucher, setVoucher }) {
  const createVoucher = async () => {
    const setServer = await axios.post(`http://localhost:5000/voucher/${establishmentId}/set`, {
      userId: 1,
      expiresAt: setVoucherDate(new Date),
    });
    if (setServer.data.prompt) {
      console.log(`prompt for a voucher replacement`);
    }
    if (setServer.data.success) {
      setVoucher(setServer.data.voucher);
    }
  }

  console.log(establishmentId);
  console.log(voucher.establishment_id);
  return (
    <div className="voucher-container">
      { voucher.establishment_id !== establishmentId &&
        <p className="subheader">Are you on the go and busy? Save a happy hour deal for later!</p>
      }
      { voucher.establishment_id !== establishmentId && 
        <button type="button" className="get-voucher" onClick={() => { createVoucher() }}>Get Day Voucher</button>
      }

      { voucher.establishment_id === establishmentId && 
        <p className="subheader">Redeem your voucher in person before it expires!</p>
      }
      { voucher.establishment_id === establishmentId && 
        <button type="button" className="redeem-voucher" onClick={() => { console.log('clicked') }}>
          <p className="subheader">Redeem Voucher</p>
          <p className="voucher-timer">Expires at: 8:00pm</p>
        </button>
      }
    </div>
  )
}