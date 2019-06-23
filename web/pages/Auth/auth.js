import auth0 from 'auth0-js';
import getConfig from 'next/config';
import Router from 'next/router';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export default class Auth {
  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthenticated = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
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

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        window.location.href = '/';
    
        // TODO: Investigate why Router.replace('/'); does not work...
        // Router.replace('/');
        alert(`Error: ${err.error}. Check the console for further details`);
      }
    });
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  setSession(authResult) {
    // set isLoggedIn flag in localstroage
    localStorage.setItem('isLoggedIn', 'true');
    // set the time that the Access Token will expire at
    let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

    // Once session is set, navigate to the home route
    window.location.href = '/';

    // TODO: Investigate why Router.replace('/'); does not work...
    // Router.replace('/');
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        this.logout();
        console.log(err);
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

    this.auth0.logout({
      returnTo: window.location.origin
    })

    // navigate to the home route
    window.location.href = '/';
    
    // TODO: Investigate why Router.replace('/'); does not work...
    // Router.replace('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the access token's expiry time
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }
}