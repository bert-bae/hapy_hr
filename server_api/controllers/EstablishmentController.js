'use strict';
const Establishment = require('../models/establishment');

exports.getAllEstablishments = async (req, res, next) => {
  try {
    let result = await Establishment.getEstablishments();
    result = Array.isArray(result) ? result : [result];
    res.send({success: true, error: null, establishments: result});
  } catch(err) {
    console.log(`Error getting establishments: ${JSON.stringify(err)}`);
    res.send({ success: false, error: err, establishments: null });
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
  const longitude = req.query.longitude;
  const latitude = req.query.latitude;
  try {
    let result = await Establishment.getNearbyEstablishmentsByDistance(longitude, latitude);
    result = Array.isArray(result) ? result : [result];
    res.send({ success: true, error: null, establishments: result });
  } catch(err) {
    console.log('Error getting establishments by distance.');
    console.log(err);
    res.send({ success: false, error: err, establishments: null });
  }
}

exports.createNewEstablishmentEntry = async (req, res, next) => {
  console.log(9123912039192391);
}