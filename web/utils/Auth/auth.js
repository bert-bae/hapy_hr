import auth0 from 'auth0-js';
import getConfig from 'next/config';
import jwtDecode from 'jwt-decode';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export default class Auth {
  accessToken;
  idToken;
  expiresAt;

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthenticated = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
    this.getQueryParams = this.getQueryParams.bind(this);
    this.extractInfoFromHash = this.extractInfoFromHash.bind(this);
  }
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
  
  extractInfoFromHash() {
    if (process.server) {
      return;
    }
    const { id_token } = this.getQueryParams();
    return {
      token: id_token,
      user_details: jwtDecode(id_token),
    }
  }

  getQueryParams() {
    const params = {};
    window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
      params[$1] = $3;
    });
    return params;
  }

  handleAuthentication() {
    const userDetails = this.extractInfoFromHash()
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult, userDetails);
      } else if (err) {
        alert(`Error: ${err.error}. Check the console for further details`);
        window.location.replace('/');
      }
    });
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  setSession(authResult, userDetails) {
    // set isLoggedIn flag in localstroage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user_details', JSON.stringify(userDetails.user_details));

    // set the time that the Access Token will expire at
    let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

    // Redirect to homepage
    window.location.replace('/');
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        this.logout();
        alert(`Could not get new token (${err.error}: ${err.error_description})`);
      }
    });
  }

  logout() {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Remove isLoggedIn flag from localstorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user_details');

    window.location.replace('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the access token's expiry time
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }
}