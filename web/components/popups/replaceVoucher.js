import axios from 'axios';
import { useAuth0 } from "../../utils/Auth/react-auth0-wrapper";

export default function ReplaceVoucher({ establishmentId, voucher, setShowReplace, createVoucher }) {
  const { user } = useAuth0();
  const establishment = voucher.establishment.length > 0 ? voucher.establishment[0] : null;

  // Invalidates the current voucher with a post request
  // Once invalidation is confirmed, createVoucher checks if there is a valid voucher
  // If it is false, then creates a new valid voucher to replace the previous one
  const replaceVoucher = async () => {
    try {
      const invalidate = await axios.post(`${process.env.DATABASE_URL}/voucher/${voucher.id}/invalidate`);
      if (invalidate.data.success) {
        createVoucher(establishmentId, user);
        setShowReplace(false);
        return;
      }
    } catch(err) {
      console.log(err);
    }
  }
  return (
    <div className="modal-popup">
      <p className="subheader">
        Replace your voucher at<br/>{establishment.name}?
      </p>
      <div className="btn-container">
        <button type="button" className="cancel-btn" onClick={() => { setShowReplace(false)}}>No</button>
        <button type="button" className="confirm-btn" onClick={() => { replaceVoucher() }}>Yes</button>
      </div>
    </div>
  )
}