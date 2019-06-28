'use strict';

const { Model, raw } = require('objection');

class OperationalHour extends Model {
  static get tableName() {
    return 'operational_hour';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      require: ['weekday', 'start', 'end'],
    }
  }
}

module.exports = OperationalHour;