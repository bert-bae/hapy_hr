const express = require('express');
const knex = require('knex')(require('./knexfile.js'));
const cors = require('cors');
const { Model } = require('objection');
const app = express();
const port = 5000;

// Routes - All Routes go here. Routes connect with controllers
const establishment = require('./routes/establishment');

// Connect with Knex to start database connection
Model.knex(knex);

// Allow CORS Policy
app.use(cors());

// Set all route file connections here
app.use('/establishment', establishment);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})