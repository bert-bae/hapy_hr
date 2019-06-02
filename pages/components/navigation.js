import Link from 'next/link';

export default function Navigation() {
  return (
    <div className="navigation-bar">
      <div className="branding">
        <div className="brand-logo"></div>
        <h1 className="logo">HapyHr</h1>
      </div>
      <div className="navigation-menu">
        <Link href="/">
          <a className="nav-option">Home</a>
        </Link>
        <Link href="/deals">
          <a className="nav-option">Deals</a>
        </Link>
        <Link href="/trending">
          <a className="nav-option">Trending</a>
        </Link>
        <Link href="/about">
          <a className="nav-option">About</a>
        </Link>
      </div>
      <style jsx>{`
        .navigation-bar {
          height: 100px;
          width: 100%;
          background-color: #FFF;
          display: flex;
          flex-flow: row wrap;
          align-items:center;
          justify-content: space-between;
          box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.7);
        }
        .branding {
          width: fit-content;
          height: 100%;
          display: flex;
          align-items: center;
          padding-left: 20px;
          text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
        }
        .brand-logo {
          background-image: url('#');
          background-size: contain;
          background-position: 50%;
          background-repeat: no-repeat;
          height: 75px;
          width: 75px;
          margin-right: 25px;
          background-color: red;
        }
        .logo {
          color: #ffc424;
          margin: 0;
        }
        .navigation-menu {
          padding-right: 20px;
          width: fit-content;
          display: flex;
          justify-content: flex-end;
        }
        a {
          margin-left: 20px;
          width: 100px;
          height: 27px;
          border: 2px solid black;
          color: black;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
        }
        a:hover {
          background-color: black;
          color: #FFF;
          transition: 0.2s all;
        }
      `}</style>
    </div>
  )
}