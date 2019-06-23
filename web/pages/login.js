import getConfig from 'next/config';
import { useState, useEffect } from 'react';
import Auth from './Auth/auth';
import Router from 'next/router';

export default function Login(props) {
  // Initiate new instance of Auth class object...
  const authenticate = new Auth();
  
  const goTo = (route) => {
    Router.replace(`/${route}`);
  }

  const login = () => {
    authenticate.login();
  }

  const logout = () => {
    authenticate.logout();
  }

  useEffect(() => {
    const { renewSession } = authenticate;
    if (localStorage.getItem('isLoggedIn') === true) {
      renewSession();
    }
  })
  return (
    <>
      { authenticate.isAuthenticated() &&
        <button onClick={() => {logout()}}>Log Out</button>
      }
      { !authenticate.isAuthenticated() &&
        <button onClick={() => {login()}}>Log In</button>
      }
    </>
  )
}
  