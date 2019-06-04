import '../../styles/components/navigation.scss';
import Link from 'next/link';
import Head from 'next/head';

export default function Navigation() {
  const openMenu = () => {
    const navmenu = document.getElementsByClassName('navigation-menu')[0];
    navmenu.style = "display: block";
  }
  const closeMenu = () => {
    const navmenu = document.getElementsByClassName('navigation-menu')[0];
    navmenu.style = "display: none";
  }
  return (
    <div className="navigation-bar">
      <div className="branding">
        <div className="brand-logo"></div>
        <h1 className="hapyhr">HapyHr</h1>
      </div>
      <div className="nav-toggle-menu" onClick={(e) => { openMenu(e);}}>|||</div>
      <div className="navigation-menu">
        <div className="nav-toggle-menu" onClick={(e) => { closeMenu(e);}}>|||</div>
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