import '../styles/components/navigation.scss';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Auth from '../utils/Auth/auth';

export default function Navigation() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const openMenu = () => {
    const navmenu = document.getElementsByClassName('navigation-menu')[0];
    navmenu.style = "display: block";
  }
  const closeMenu = () => {
    const navmenu = document.getElementsByClassName('navigation-menu')[0];
    navmenu.style = "display: none";
  }

  // Initiate new instance of Auth class object...
  const authenticate = new Auth();

  const goTo = (route) => {
    Router.replace(`/${route}`);
  }

  const login = () => {
    authenticate.login();
  }

  const logout = () => {
    authenticate.logout();
  }

  useEffect(() => {
    const { renewSession } = authenticate;
    if (localStorage.getItem('isLoggedIn') === true) {
      renewSession();
    }
    setLoggedIn(localStorage.getItem('isLoggedIn'));
    setLoading(true);
  })

  return (
    <div className="navigation-bar">
      <div className="branding">
        <div className="brand-logo"></div>
        <h1 className="hapyhr">HapyHr</h1>
      </div>
      <div className="nav-toggle-menu" onClick={(e) => { openMenu(e);}}>|||</div>
      <div className="navigation-menu">
        <div className="nav-toggle-menu" onClick={(e) => { closeMenu(e);}}>|||</div>
        { loading && loggedIn &&
          <a className="nav-option" onClick={() => {logout()}}>Log Out</a>
        }
        { loading && !loggedIn &&
          <a className="nav-option" onClick={() => {login()}}>Log In</a>
        }
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