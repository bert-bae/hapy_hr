import { useState } from 'react';

import Head from 'next/head';
import Navigation from './components/navigation';
import Jumbotron from './components/jumbotron';

export default function Index() {
  return (
    <div>
      <Head>
        <title>HapyHr | Find Happy Hour Deals</title>
        <meta description="Testing NEXT head"></meta>
      </Head>
      <Navigation/>
      <Jumbotron imgSrc={"/static/images/homepage.jpg"} mainHeader={"Explore with Great Happy Hour Deals"} subHeader={"Food & Drink Deals Near You"}></Jumbotron>
      <style jsx>{`
        :global(body), :global(html) {
          display: inline-block;
          position: relative;
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  )
}