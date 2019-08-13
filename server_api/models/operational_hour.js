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

  static async createOperationalHourEntry(data, estId) {
    data.establishment_id = estId;
    return this.query().insert(data);
  }
}

module.exports = OperationalHour;