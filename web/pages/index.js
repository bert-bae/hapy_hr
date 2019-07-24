import Head from 'next/head';
import Jumbotron from '../components/jumbotron';
import HomeCTA from '../components/homeCTA';

export default function Index() {
  return (
    <div className="page-container">
      <Head>
        <title>HappyR | Find Happy Hour Deals</title>
        <meta description="Testing NEXT head"></meta>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
        <link href="/static/icons/happyr-icon.png" rel="icon" type="image/gif"></link>
      </Head>
      <Jumbotron imgSrc={"/static/images/homepage.jpg"} mainHeader={"Explore with Great Happy Hour Deals"} subHeader={"Food & Drink Deals Near You"}></Jumbotron>
      <HomeCTA/>
    </div>
  )
}