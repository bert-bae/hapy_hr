import Link from 'next/link';

export default function Navigation() {
  return (
    <div className="navigation-bar">
      <div className="branding">
        <div className="brand-logo"></div>
        <h1 className="hapyhr">HapyHr</h1>
      </div>
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
      <style jsx>{`
        .navigation-bar {
          height: 100px;
          width: 100%;
          background-color: #EFA700;
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
          font-size: 24px;
        }
        .hapyhr {
          color: #DB6218;
          margin: 0;
          font-size: 32px!important;
          font-weight: 600;
        }
        .navigation-menu {
          padding-right: 20px;
          width: fit-content;
          display: flex;
          justify-content: flex-end;
        }
        a {
          margin-left: 20px;
          width: 100px!important;
          height: 27px!important;
          border: 2px solid #DB6218;
          background-color: #EF7F00;
          color: #FFF;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
        }
        a:hover {
          background-color: #DB6218;
          color: #FFF;
          transition: 0.2s all;
        }
      `}</style>
    </div>
  )
}