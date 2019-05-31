'use strict';

const MenuItem = require('./menu_item');
const OperationalHour = require('./operational_hour');
const { Model, raw } = require('objection');

class Establishment extends Model {
  static get tableName() {
    return 'establishment';
  }

  static get relationMappings() {
    return {
      menu_item: {
        relation: Model.HasManyRelation,
        modelClass: MenuItem,
        join: {
          from: 'establishment.id',
          to: 'menu_item.establishment_id'
        }
      },
      operational_hour: {
        relation: Model.HasManyRelation,
        modelClass: OperationalHour,
        join: {
          from: 'establishment.id',
          to: 'operational_hour.establishment_id'
        }
      }
    }
  }

  // JSON Schema, this is for validation
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'city', 'addess_line', 'province', 'postal_code'],
      properties: {
        name: { type: 'string' },
        city: { type: 'string' },
        address_line: { type: 'string' },
        province: { type: 'string' },
        postal_code: { type: 'string' },
      }
    }
  }

  // Get all establishments with their hours of operation and menu items
  static async getEstablishments() {
    return this.query()
      .eager('menu_item')
      .eager('operational_hour');
  }

  // Get a single establishment by id
  static async getSingleEstablishment(id) {
    return this.query().where('id', id);
  }
}

module.exports = Establishment;