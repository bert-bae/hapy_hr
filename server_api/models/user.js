'use strict';

const { Model, raw } = require('objection');

class User extends Model {
  static get tableName() {
    return 'user';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      require: ['email']
    }
  }

  static async createUser(userData) {
    return this.query().insert(userData);
  }
}

module.exports = User;