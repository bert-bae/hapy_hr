import axios from 'axios';
import '../../styles/components/voucherModals.scss'

export default function RedeemVoucher({ voucher, setShowRedeem, setVoucher }) {
  const establishment = voucher.establishment.length > 0 ? voucher.establishment[0] : null;
  const redeemVoucher = async () => {
    try {
      await axios.post(`http://localhost:5000/voucher/${voucher.id}/redeem`);
      setShowRedeem(false);
      setVoucher({ id: null });
      // TODO CREATE A CUSTOM RESET INDICATOR FOR VOUCHERS FOR THE DAY... CANNOT SET ANOTHER VOUCHER IF A REDEEMED ONE EXISTS IN THAT DAY
    } catch(err) {
      console.log(err);
    }
  }
  return (
    <div className="modal-popup">
      <p className="subheader">
        Redeem your voucher at {establishment.name}?
      </p>
      <div className="btn-container">
        <button type="button" className="cancel-btn" onClick={() => { setShowRedeem(false)}}>No</button>
        <button type="button" className="confirm-btn" onClick={() => { redeemVoucher() }}>Yes</button>
      </div>
    </div>
  )
}