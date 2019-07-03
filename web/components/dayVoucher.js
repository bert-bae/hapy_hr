import {useState, useEffect} from 'react';
import axios from 'axios';
import { setVoucherDate } from '../utils/dateUtils';
import RedeemVoucher from './popups/redeemVoucher';
import ReplaceVoucher from './popups/replaceVoucher';
import '../styles/components/dayVoucher.scss';

export default function DayVoucher({ establishmentId, voucher, setVoucher }) {
  const [showRedeem, setShowRedeem] = useState(false);
  const [showReplace, setShowReplace] = useState(false);
  const createVoucher = async (estId) => {
    const setServer = await axios.post(`http://localhost:5000/voucher/${estId}/set`, {
      userId: 1,
      expiresAt: setVoucherDate(new Date),
    });
    if (setServer.data.prompt) {
      setShowRedeem(false);
      setShowReplace(true);
    }
    if (setServer.data.success) {
      setVoucher(setServer.data.voucher);
    }
  }

  return (
    <div className="voucher-container">
      { voucher.establishment_id !== establishmentId &&
        <p className="subheader">Are you on the go and busy? Save a happy hour deal for later!</p>
      }
      { voucher.establishment_id !== establishmentId && 
        <button type="button" className="get-voucher" onClick={() => { createVoucher(establishmentId) }}>Get Day Voucher</button>
      }

      { voucher.establishment_id === establishmentId && 
        <p className="subheader">Redeem your voucher in person before it expires!</p>
      }
      { voucher.establishment_id === establishmentId && 
        <button type="button" className="redeem-voucher" onClick={() => { setShowRedeem(true) }}>
          <p className="subheader">Redeem Voucher</p>
          <p className="voucher-timer">Expires at: 8:00pm</p>
        </button>
      }
      { showRedeem && voucher.id &&
        <RedeemVoucher voucher={voucher} setShowRedeem={setShowRedeem} setVoucher={setVoucher}/>
      }
      { showReplace && voucher.id && 
        <ReplaceVoucher establishmentId={establishmentId} voucher={voucher} setShowReplace={setShowReplace} createVoucher={createVoucher}/>
      }
    </div>
  )
}