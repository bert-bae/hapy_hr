import Head from 'next/head';
import Link from 'next/link';
import Jumbotron from '../components/jumbotron';

export default function AboutPage() {
  return (
    <div className="page-container">
      <Head>
        <title>HappyR | Find Happy Hour Deals</title>
        <meta description="Testing NEXT head"></meta>
      </Head>
      <Jumbotron imgSrc={"/static/images/homepage.jpg"} mainHeader={"Find happy hour deals near you with one click"} subHeader={"Happy hour information for users, exposure for restaurants and bars"}></Jumbotron>
      <div className="about-container">
        <h1 className="section-header">What can HappyR do for you?</h1>
        <div className="section-container">
          <div className="section-image user"></div>
          <div className="section-content">
            <h1 className="subheader">Everyday Users</h1>
            <p className="content">Never know where to find happy hour deals? HappyR's search engine helps you find locations near you with great deals. Happy hour times are limited and your time is important. Spend less time searching and more time enjoying some quality time socializing, winding down, and relax with discounts!</p>
            <Link href="/deals">
              <a className="link-option">Find Deals</a>
            </Link>
          </div>
        </div>
        <div className="section-container">
          <div className="section-content">
            <h1 className="subheader">Restaurants and Bars</h1>
            <p className="content">Have special deals, but your sandwich board is not doing enough? Get more customers, increase your reach, and list your happy hour deals. Increase your online presence to be on the list of places locals will visit near them!</p>
            <Link href="/establishment/list">
              <a className="link-option">List Your Deals</a>
            </Link>
          </div>
          <div className="section-image restaurant"></div>
        </div>
        <div className="section-container">
          <div className="section-image unwind"></div>
          <div className="section-content">
            <h1 className="subheader">Connect, Unwind, and Relax</h1>
            <p className="content">Be a part of the community by socializing or simply unwinding in its presence. HappyR is the tool to discover restaurants and bars to visit and unwind after a long day while taking advantage of great happy hour deals near you.</p>
            <Link href="/trending">
              <a className="link-option">View Trending Locations</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}