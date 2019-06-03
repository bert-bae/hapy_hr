import { useState } from 'react';

import Head from 'next/head';
import Navigation from './components/navigation';
import Jumbotron from './components/jumbotron';

// color styles... temp location
// main = DB6218
// secondary = EF7F00
// tertiary = FF9914
// background = EFA700
// highlights & components = FF4823

export default function Index() {
  return (
    <div>
      <Head>
        <title>HapyHr | Find Happy Hour Deals</title>
        <meta description="Testing NEXT head"></meta>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
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
        :global(h1), :global(p) {
          font-family: 'Roboto', sans-serif!important;
        }
      `}</style>
    </div>
  )
}