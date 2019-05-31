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