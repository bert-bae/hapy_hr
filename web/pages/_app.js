import App, { Container } from 'next/app';
import { Auth0Provider } from "../utils/Auth/react-auth0-wrapper";
import Head from 'next/head';

import Navigation from '../components/navigation';
import Footer from '../components/footer';

import '../styles/index.scss';

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Auth0Provider
        domain={process.env.AUTH0_DOMAIN}
        client_id={process.env.AUTH0_CLIENT_ID}
        onRedirectCallback={onRedirectCallback}>
        <Head>
          <link href="/static/icons/happyr-icon.png" rel="icon" type="image/gif"></link>
          <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
          <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.0/mapbox-gl.css' rel='stylesheet' />
          <script src="https://kit.fontawesome.com/2d22d84f41.js"></script>
        </Head>
        <Container>
          <Navigation/>
          <Component {...pageProps} />
          <Footer/>
        </Container>
      </Auth0Provider>
    );
  }
}

export default MyApp;