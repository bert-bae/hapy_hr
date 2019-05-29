
exports.up = function(knex, Promise) {
  return knex.schema.createTable('operational_hour', table => {
    table.increments('id').unsigned().primary();
    table.integer('weekday', 6);
    table.string('start');
    table.string('end');
    table.integer('establishment_id').unsigned().notNull().references('id').inTable('establishment').onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('operational_hour');
};
