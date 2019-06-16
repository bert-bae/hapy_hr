import auth0 from 'auth0-js';
import getConfig from 'next/config';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: publicRuntimeConfig.AUTH0_DOMAIN,
    clientID: publicRuntimeConfig.AUTH0_CLIENT_ID,
    redirectUri: publicRuntimeConfig.AUTH0_REDIRECT_URI, 
    responseType: 'token id_token',
    scope: 'openid'
  })

  login() {
    this.auth0.authorize();
  }
}