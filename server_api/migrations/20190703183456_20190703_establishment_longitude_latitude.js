
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('establishment', table => {
    table.string('longitude', 20);
    table.string('latitude', 20);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('establishment', table => {
    table.dropColumn('longitude');
    table.dropColumn('latitude');
  })
};
