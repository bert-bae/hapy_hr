import Head from 'next/head';
import Link from 'next/link';
import Jumbotron from '../components/jumbotron';

export default function Establishment() {
  return (
    <div className="page-container">
      <Head>
        <title>HappyR | List Your Restaurant & Bar</title>
        <meta description="HappyR deals at the user's fingertips. List your restaurant or bar with us today to get approved listing on our HappyR user's radars for growth, exposure, and success."></meta>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
        <script src="https://kit.fontawesome.com/2d22d84f41.js"></script>
      </Head>
      <Jumbotron imgSrc={"/static/images/about-restaurant.jpg"} mainHeader={"HappyR | For Restaurants and Bars"} subHeader={"Sandwich boards can only get you so far..."}></Jumbotron>
      <div className="establishment-page-container">
      <div className="grid-container">
        <div className="section-container">
          <div className="orange-map-icon icon"></div>
          <div className="section-content">
            <h1 className="subheader">Set Your Location</h1>
            <p className="content">Get started fast! All we need is your address, city, province, and postal code to get started. Worried about getting your location on our map? Don't worry, we will take care of that for you.</p>
          </div>
        </div>
        <div className="section-container">
          <div className="orange-calendar-icon icon"></div>
          <div className="section-content">
            <h1 className="subheader">Set Happy Hour Times</h1>
            <p className="content">Got your happy hour times already set? We separate special deals per weekday so we show your appropriate menu of day to our users! Have the times ready per day of the week and you are almost ready to go.</p>
          </div>
        </div>
        <div className="section-container">
          <div className="orange-utensil-icon icon"></div>
          <div className="section-content">
            <h1 className="subheader">Set Happy Hour Menu</h1>
            <p className="content">We know where and when to send our users, but let us know <i>why</i> they should go! Have drink and food specials? Great! Send us the menu item name, price and we are ready to get your information ready to launch.</p>
          </div>
        </div>
      </div>
      <Link href="/establishment/list">
        <a className="link-option">Let's Start Listing</a>
      </Link>
      </div>
    </div>
  )
}