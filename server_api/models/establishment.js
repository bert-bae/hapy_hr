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
      .mergeEager('operational_hour');
  }

  // Get a single establishment by id
  static async getSingleEstablishment(id) {
    return this.query().where('id', id);
  }

  // Get list of establishments by DISTANCE (https://stackoverflow.com/questions/11112926/how-to-find-nearest-location-using-latitude-and-longitude-from-sql-database)
  // 6371 for KMs, 3959 for MIs

  // query below is correct... query above is not working somewhere
  // keep as documentation for understanding haversine functions.. RAW SQL EXAMPLE BELOW:
  // SELECT id, ( 6371 * acos( cos( radians(49.278433) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(-123.114735) ) + sin( radians(49.278433) ) * sin( radians( latitude ) ) ) ) AS distance FROM establishment HAVING distance < 25 ORDER BY distance LIMIT 0 , 20;

  static async getNearbyEstablishmentsByDistance(sLongitude, sLatitude, sDistance) {
    return this.query()
      .select(raw(`*, 6371 * ACOS(COS(RADIANS(${sLatitude})) * COS(RADIANS(latitude)) * COS(RADIANS(longitude) - RADIANS(${sLongitude})) + SIN(RADIANS(${sLatitude})) * SIN(RADIANS(latitude)))`).as('distance'))
      .orderBy('distance')
      .limit(10)
      .eager('menu_item')
      .mergeEager('operational_hour');
  }
}

module.exports = Establishment;