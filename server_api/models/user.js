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

  static async getUserByEmail(email) {
    const retrieveUser = () => {
      return this.query().where('email', email);
    }
    const user = await retrieveUser();
    if (user.length > 0) {
      return user[0];
    }
    return null;
  }
}

module.exports = User;