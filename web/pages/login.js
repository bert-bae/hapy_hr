import getConfig from 'next/config';
import { useState, useEffect } from 'react';
import Auth from './Auth/auth';

export default function Login() {
  // useEffect - load authenthication after the component has rendered
  useEffect(() => {
    const auth = new Auth();
    auth.login();
  })

  return (
    <h1>hello world</h1>
  )
}
  