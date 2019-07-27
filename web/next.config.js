// next.config.js
const dotenv = require('dotenv').config({path: __dirname + '/.env'});
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  publicRuntimeConfig: {
    GOOGLE_API: process.env.GOOGLE_API,
    MAPBOX_PK: process.env.MAPBOX_PK,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_REDIRECT_URI: process.env.AUTH0_REDIRECT_URI
  }
});