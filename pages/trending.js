import Head from 'next/head';
import Navigation from './components/navigation';

export default function TrendingPage() {
  return (
    <div>
      <Head>
        <title>HapyHr | Find Happy Hour Deals</title>
        <meta description="Testing NEXT head"></meta>
      </Head>
      <Navigation/>
      Trending
    </div>
  )
}