const express = require('express');
const knex = require('knex')(require('./knexfile.js'));
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const dotenv = require('dotenv').config({ path: __dirname + '/.env'});
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
const { Model } = require('objection');
const app = express();
const port = 5000;

// Routes - All Routes go here. Routes connect with controllers
const establishment = require('./routes/establishment');
const user = require('./routes/user');

// Authentication middleware. Access token must exist and be verified against the auth0 JSON web key set
const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and 
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.AUTH0_JWKSURI,
  }),
  // Validate the audience and the issuer.
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_DOMAIN,
  algorithms: ['RS256']
})
// Connect with Knex to start database connection
Model.knex(knex);

// Allow CORS Policy
app.use(cors());
app.use(bodyParser.json());

// Set all route file connections here
app.use('/establishment', establishment);
app.use('/user', user);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})