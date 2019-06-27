
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('menu_item', table => {
    table.string('type', 30);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('menu_item', table => {
    table.dropColumn('type');
  })
};
