import Router from 'next/router';
import { useEffect, useState} from 'react';
import Auth from '../utils/Auth/auth';

export default function Callback() {
  const authenticate = new Auth;

  useEffect(() => {
    authenticate.handleAuthentication();
  })
  return (
    <>
      <h1>Authentication is loading.</h1>
    </>
  )
}