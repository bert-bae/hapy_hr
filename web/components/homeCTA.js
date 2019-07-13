import '../styles/components/homeCTA.scss';

export default function HomeCTA() {
  return (
    <div className="home-container">
      <h1 className="section-header">What is HapyHr?</h1>
      <p className="section-subheader">It lets you find happy hour deals in one click to...</p>
      <div className="cta-container">
        <div className="cta-section">
          <h1>Connect with Colleagues</h1>
          <p>HapyHr helps you find places to unwind with great deals to share with others to bond.</p>
        </div>
        <div className="cta-section">
          <h1>Discover New Places</h1>
          <p>Step out of your comfort zone and try a new environment with deals at your fingertips.</p>
        </div>
        <div className="cta-section">
          <h1>Gather with your Friends!</h1>
          <p>Take advantage of HapyHr to spend quality bonding time with friends at a great price.</p>
        </div>
      </div>
    </div>
  )
}