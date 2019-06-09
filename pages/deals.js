import '../styles/default.scss';
import Head from 'next/head';
import axios from 'axios';

import Navigation from './components/navigation';
import Establishments from './components/establishments';

const DealPage = (props) => {
  return (
    <div>
      <Head>
        <title>HapyHr | Find Happy Hour Deals</title>
        <meta description="HapyHr | Discover new places near you with special happy hour deals!"></meta>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </Head>
      <Navigation/>
      <Establishments establishments={props.establishments}/>
    </div>
  )
}

// Gets initial data from server request, this is passed directly to the component's return(...) as a prop since this component is a stateless component

DealPage.getInitialProps = async (initData) => {
  // gets the query params from url
  const query = initData.query || null;

  // Connect to server for data
  const res = await axios.get('http://localhost:5000/establishment');
  const data = res.data;
  return { establishments: data.establishment };
}

export default DealPage;