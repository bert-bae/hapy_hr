'use strict';
const { Model, raw } = require('objection');
const Establishment = require('./establishment');

class Voucher extends Model {
  static get tableName() {
    return 'voucher';
  }

  static get relationMappings() {
    return {
      establishment: {
        relation: Model.HasManyRelation,
        modelClass: Establishment,
        join: {
          from: 'voucher.establishment_id',
          to: 'establishment.id'
        }
      },
    }
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['establishment_id', 'user_id']
    }
  }

  static async getLastInsertFromUser() {
    const retrieveVoucher = () => {
      return this.query().where('id', raw('LAST_INSERT_ID()')).eager('establishment');
    }
    const voucher = await retrieveVoucher();
    if (voucher.length > 0) {
      return voucher[0];
    }
    return null;
  }

  static async setVoucher(establishmentId, userId, expiresAt) {
    const verifyUniqueForDay = () => {
      return this.query()
        .where('valid', true)
        .andWhere('expires_at', '<=', expiresAt)
        .andWhere('expires_at', '>', raw("DATE_FORMAT(CONCAT(CURDATE(), ' 00:00:00'), '%m-%d-%Y %H:%i:%s')"));
    }
    const voucherExists = await verifyUniqueForDay();
    if (voucherExists.length === 0) {
      return this.query().insert({ establishment_id: establishmentId, user_id: userId, expires_at: expiresAt});
    }
    return null;
  }

  static async invalidateVoucher(voucherId) {
    return this.query().patch({ valid: false }).where('id', voucherId);
  }

  static async redeemVoucher(voucherId) {
    return this.query().patch({ redeemed: true }).where('id', voucherId);
  }

  static async getVoucher(voucherId) {
    return this.query().where('id', voucherId);
  }
}

module.exports = Voucher;