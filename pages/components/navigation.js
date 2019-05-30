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
          <a class="nav-option">Home</a>
        </Link>
        <Link href="/deals">
          <a class="nav-option">Deals</a>
        </Link>
        <Link href="/trending">
          <a class="nav-option">Trending</a>
        </Link>
        <Link href="/about">
          <a class="nav-option">About</a>
        </Link>
      </div>
      <style jsx>{`
        .navigation-bar {
          height: 100px;
          width: 100%;
          background-color: black;
          display: flex;
          flex-flow: row wrap;
          align-items:center;
          justify-content: space-between;
        }
        .branding {
          width: fit-content;
          height: 100%;
          display: flex;
          align-items: center;
          padding-left: 20px;
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
          color: #FFF;
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
          background-color: black;
          border: 2px solid #FFF;
          color: #FFF;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
        }
        a:hover {
          background-color: #FFF;
          color: black;
          transition: 0.2s all;
        }
      `}</style>
    </div>
  )
}