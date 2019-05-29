'use strict';

const { Model, raw } = require('objection');

export default class MenuItem extends Model {
  static get tableName() {
    return 'menu_item';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      require: ['name', 'price', 'description'],
    }
  }
}