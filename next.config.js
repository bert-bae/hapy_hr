// next.config.js
const dotenv = require('dotenv').config({path: __dirname + '/.env'});
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  publicRuntimeConfig: {
    GOOGLE_API: process.env.GOOGLE_API,
  }
});