const dotenv = require('dotenv')
const env = dotenv.config();
if (env.error) {
  throw env.error
}
// Update with your config settings.

module.exports = {
  local: {
    client: 'mysql',
    connection: {
      host : process.env.DB_HOSTNAME,
      user : process.env.DB_USER,
      password :  process.env.DB_PW,
      database : process.env.DB_NAME
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host : process.env.DB_HOSTNAME_PROD,
      user : process.env.DB_USER_PROD,
      password :  process.env.DB_PW_PROD,
      database : process.env.DB_NAME_PROD
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
