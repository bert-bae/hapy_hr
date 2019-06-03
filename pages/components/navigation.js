import '../../styles/components/navigation.scss';
import Link from 'next/link';

export default function Navigation() {
  const toggler = (e) => {
    const element = e.target;
    const navmenu = document.getElementsByClassName('navigation-menu')[0];
    if (element.className.includes('toggled')) {
      element.classList = "nav-toggler";
      navmenu.style = "display: none";
      return;
    }
    element.classList = "nav-toggler toggled";
    navmenu.style = "display: flex";
  }
  return (
    <div className="navigation-bar">
      <div className="branding">
        <div className="brand-logo"></div>
        <h1 className="hapyhr">HapyHr</h1>
      </div>
      <div className="nav-toggler" onClick={(e) => { toggler(e);}}>=</div>
      <div className="navigation-menu">
        <Link href="/">
          <a className="nav-option">Home</a>
        </Link>
        <Link href="/deals">
          <a className="nav-option">Deals</a>
        </Link>
        {/* <Link href="/trending">
          <a className="nav-option">Trending</a>
        </Link> */}
        <Link href="/about">
          <a className="nav-option">About</a>
        </Link>
      </div>
    </div>
  )
}