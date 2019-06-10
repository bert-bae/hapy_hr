export default function DayVoucher() {
  return (
    <div className="voucher-container">
      <p className="subheader">Get Day Voucher</p>
      <button type="button" className="get-voucher" onClick={() => { console.log('clicked') }}>Get Deal</button>
    </div>
  )
}