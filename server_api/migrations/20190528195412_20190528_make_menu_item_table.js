
exports.up = function(knex, Promise) {
  return knex.schema.createTable('menu_item', table => {
    table.increments('id').unsigned().primary();
    table.string('name');
    table.string('description');
    table.integer('price');
    table.integer('establishment_id').unsigned().notNull().references('id').inTable('establishment').onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('menu_item');
};
