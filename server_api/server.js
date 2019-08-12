const express = require('express');
const knex = require('knex')(require('./knexfile.js'));
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config({ path: __dirname + '/.env'});
const { Model } = require('objection');
const app = express();
const port = 5000;

// Routes - All Routes go here. Routes connect with controllers
const establishment = require('./routes/establishment');
const user = require('./routes/user');
const voucher = require('./routes/voucher');

// Connect with Knex to start database connection
Model.knex(knex);

// Allow CORS Policy
app.use(cors());
app.use(bodyParser.json());

// Set all route file connections here
app.use('/establishment', establishment);
app.use('/user', user);
app.use('/voucher', voucher);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})