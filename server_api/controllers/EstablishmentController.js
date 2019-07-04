'use strict';
const Establishment = require('../models/establishment');

exports.getAllEstablishments = async (req, res, next) => {
  try {
    let results = await Establishment.getEstablishments();
    res.send({success: true, error: null, establishment: results});
  } catch(err) {
    console.log(`Error getting establishments: ${JSON.stringify(err)}`);
    res.send({ success: false, error: err, establishment: null });
  }
}

exports.getSingleEstablishment = async (req, res, next) => {
  const establishmentId = req.params.establishmentId;
  try {
    let result = await Establishment.getSingleEstablishment(establishmentId);
    res.send({success: true, error: null, establishment: result});
  } catch(err) {
    console.log(`Error getting one establishment: ${JSON.stringify(err)}`);
    res.send({ success: false, error: err, establishment: null });
  }
}

exports.getNearbyEstablishmentsByDistance = async (req, res, next) => {
  const longitude = req.query.longitude || -123.114735;
  const latitude = req.query.latitude || 49.278433;
  const distance = 10;
  try {
    let result = await Establishment.getNearbyEstablishmentsByDistance(longitude, latitude, distance);
    console.log(result);
    res.send({ success: true, error: null, establishments: result });
  } catch(err) {
    console.log(`Error getting establishments by distance: ${JSON.stringify(err)}`);
    res.send({ success: false, error: err, establishments: null });
  }
}