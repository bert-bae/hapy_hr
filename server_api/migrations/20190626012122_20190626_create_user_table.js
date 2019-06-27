
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', table => {
    table.increments('id').unsigned().primary();
    table.string('email').defaultTo(null);
    table.string('username').defaultTo(null);
    table.datetime('created_at').defaultTo(new Date());
    table.datetime('last_login').defaultTo(new Date());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
