import "../styles/default.scss";

import Head from 'next/head';
import Navigation from './components/navigation';
import Jumbotron from './components/jumbotron';
import HomeCTA from './components/homeCTA';

// color styles... temp location
// main = DB6218
// secondary = EF7F00
// tertiary = FF9914
// background = EFA700
// highlights & components = FF4823

export default function Index() {
  console.log(111);
  return (
    <div>
      <Head>
        <title>HapyHr | Find Happy Hour Deals</title>
        <meta description="Testing NEXT head"></meta>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
      </Head>
      <Navigation/>
      <Jumbotron imgSrc={"/static/images/homepage.jpg"} mainHeader={"Explore with Great Happy Hour Deals"} subHeader={"Food & Drink Deals Near You"}></Jumbotron>
      <HomeCTA/>
    </div>
  )
}