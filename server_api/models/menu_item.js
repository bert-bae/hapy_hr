'use strict';

const { Model, raw } = require('objection');

class MenuItem extends Model {
  static get tableName() {
    return 'menu_item';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      require: ['name', 'price', 'description'],
    }
  }

  static async createMenuItemEntry(data, estId) {
    data.establishment_id = estId;
    return this.query().insert(data);
  }
}

module.exports = MenuItem;