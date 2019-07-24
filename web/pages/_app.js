import App, { Container } from 'next/app';
import { Auth0Provider } from "../utils/Auth/react-auth0-wrapper";
import getConfig from 'next/config';

import Navigation from '../components/navigation';
import Footer from '../components/footer';

import '../styles/index.scss';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

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
        domain={publicRuntimeConfig.AUTH0_DOMAIN}
        client_id={publicRuntimeConfig.AUTH0_CLIENT_ID}
        onRedirectCallback={onRedirectCallback}>
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