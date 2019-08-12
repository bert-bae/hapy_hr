
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('establishment', table => {
    table.integer('ownerId').unsigned().notNull().references('id').inTable('user');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('establishment', table => {
    table.dropColumn('ownerId');
  })
};
