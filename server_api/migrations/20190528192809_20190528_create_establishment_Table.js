
exports.up = function(knex, Promise) {
  return knex.schema.createTable('establishment', table => {
    table.increments('id').unsigned().primary();
    table.string('name').notNull();
    table.string('city', 50);
    table.string('address_line');
    table.string('province', 50);
    table.string('postal_code', 10);
    table.string('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('establishment');
};
