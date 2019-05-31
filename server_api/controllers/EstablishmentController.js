'use strict';
const Establishment = require('../models/establishment');

exports.getAllEstablishments = async (req, res, next) => {
  try {
    let results = await Establishment.getEstablishments();
    res.send({success: true, error: null, data: results});
  } catch(err) {
    console.log(`Error getting establishments: ${err}`);
    res.send({ success: false, error: err, data: null });
  }
}

exports.getSingleEstablishment = async (req, res, next) => {
  const establishmentId = req.params.establishmentId;
  try {
    let result = await Establishment.getSingleEstablishment(establishmentId);
    res.send({success: true, error: null, data: result});
  } catch(err) {
    console.log(`Error getting one establishment: ${err}`);
    res.send({ success: false, error: err, data: null });
  }
}