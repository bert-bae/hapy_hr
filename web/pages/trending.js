import Head from 'next/head';

export default function TrendingPage() {
  return (
    <div className="page-container">
      <Head>
        <title>HappyR | Find Happy Hour Deals</title>
        <meta description="Testing NEXT head"></meta>
      </Head>
      Trending
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