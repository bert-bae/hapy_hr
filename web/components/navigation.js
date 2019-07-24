import Link from 'next/link';
import { useAuth0 } from "../utils/Auth/react-auth0-wrapper";

export default function Navigation() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
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
        <img className="brand-logo" src="/static/images/happyr.png"></img>
      </div>
      <div className="nav-toggle-menu" onClick={(e) => { openMenu(e);}}>|||</div>
      <div className="navigation-menu">
        <div className="nav-toggle-menu" onClick={(e) => { closeMenu(e);}}>|||</div>
        { isAuthenticated &&
          <a className="nav-option" onClick={() => {logout()}}>Log Out</a>
        }
        { !isAuthenticated &&
          <a className="nav-option" onClick={() => {loginWithRedirect({
            redirect_uri: window.location.origin
          })}}>Log In</a>
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