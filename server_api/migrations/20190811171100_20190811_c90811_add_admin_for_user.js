
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('user', table => {
    table.boolean('is_admin').defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('user', table => {
    table.dropColumn('is_admin');
  })
};
