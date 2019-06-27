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