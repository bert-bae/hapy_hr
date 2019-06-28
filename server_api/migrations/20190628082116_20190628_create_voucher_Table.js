
exports.up = function(knex, Promise) {
  return knex.schema.createTable('voucher', table => {
    table.increments('id').unsigned().primary();
    table.boolean('valid').defaultTo(true);
    table.boolean('redeemed').defaultTo(false);
    table.datetime('created_at').defaultTo(knex.raw('now()'));
    table.datetime('expires_at');
    table.integer('establishment_id').unsigned().notNull().references('id').inTable('establishment').onDelete('CASCADE');
    table.integer('user_id').unsigned().notNull().references('id').inTable('user').onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('voucher');
};
