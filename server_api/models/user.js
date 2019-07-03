'use strict';

const { Model, raw } = require('objection');
const Voucher = require('./voucher');
const Establishment = require('./establishment');

class User extends Model {
  static get tableName() {
    return 'user';
  }

  static get relationMappings() {
    return {
      voucher: {
        relation: Model.HasManyRelation,
        modelClass: Voucher,
        join: {
          from: 'user.id',
          to: 'voucher.user_id'
        }
      },
      establishment: {
        relation: Model.ManyToManyRelation,
        modelClass: Establishment,
        join: {
          from: 'user.id',
          through: {
            // voucher is a join table between user and establishment
            from: 'voucher.user_id',
            to: 'voucher.establishment_id'
          },
          to: 'establishment.id'
        }
      }
    }
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
    // Retrieve user and check to see if there is a valid voucher
    const retrieveUser = () => {
      return this.query()
        .where('email', email)
        .eager('voucher')
        .modifyEager('voucher', builder => {
          builder.where('valid', true);
          builder.andWhere('redeemed', false);
          builder.andWhere('expires_at', '<=', 'CURDATE()');
          builder.andWhere('expires_at', '>', raw("DATE_FORMAT(CONCAT(CURDATE(), ' 00:00:00'), '%m-%d-%Y %H:%i:%s')")).eager('establishment');
        })
    }
    const user = await retrieveUser();
    if (user.length > 0) {
      return user[0];
    }
    return null;
  }
}

module.exports = User;