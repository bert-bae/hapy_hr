import Head from 'next/head';
import Navigation from './components/navigation';

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>HapyHr | Find Happy Hour Deals</title>
        <meta description="Testing NEXT head"></meta>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
      </Head>
      <Navigation/>
      About
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