
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('menu_item', table => {
    table.string('weekday', 12);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('menu_item', table => {
    table.dropColumn('weekday');
  })
};
