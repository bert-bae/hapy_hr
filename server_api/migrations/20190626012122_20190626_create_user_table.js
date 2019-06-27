
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', table => {
    table.increments('id').unsigned().primary();
    table.string('email').defaultTo(null);
    table.string('username').defaultTo(null);
    table.datetime('created_at').defaultTo(knex.raw('now()'));
    table.datetime('last_login').defaultTo(knex.raw('now()'));
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
