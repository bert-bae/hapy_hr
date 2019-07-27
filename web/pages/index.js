import Head from 'next/head';
import Jumbotron from '../components/jumbotron';
import HomeMap from '../components/home/homeMap';

export default function Index() {
  return (
    <div className="page-container">
      <Head>
        <title>HappyR | Find Happy Hour Deals</title>
        <meta description="Happyr | Find happy hour deals near you. Convenient enough so you're on your way!"></meta>
      </Head>
      <Jumbotron imgSrc={"/static/images/homepage.jpg"} mainHeader={"Explore with Great Happy Hour Deals"} subHeader={"Food & Drink Deals Near You"}></Jumbotron>
      <HomeMap/>
    </div>
  )
}