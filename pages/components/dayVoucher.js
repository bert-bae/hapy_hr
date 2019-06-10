import '../../styles/components/dayVoucher.scss';

export default function DayVoucher() {
  return (
    <div className="voucher-container">
      <p className="subheader">Are you on the go and busy? Save a happy hour deal for later!</p>
      <button type="button" className="get-voucher" onClick={() => { console.log('clicked') }}>Get Day Voucher</button>
    </div>
  )
}