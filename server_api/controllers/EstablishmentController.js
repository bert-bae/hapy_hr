'use strict';
const Establishment = require('../models/establishment');
const OperationalHour = require('../models/operational_hour');
const MenuItem = require('../models/menu_item');
const formattingUtils = require('../utils/formattingUtils');

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

exports.createNewEstablishmentEntryWithTimeAndMenu = async (req, res, next) => {
  let { user, establishment, menuItems, happyTimes} = req.body;
  if (!user || !user.isAdmin) {
    res.status(404).send({ success: false, error: "You are not authorized to add establishments." });
  }
  try {
    const est = await Establishment.createEstablishment(formattingUtils.formatEstablishmentData(establishment));
    const estId = est.id;
    for (const hour of happyTimes) {
      await OperationalHour.createOperationalHourEntry(hour, estId);
    }
    for (const item of menuItems) {
      if (item.name.trim() && item.price) {
        let formatItem = formattingUtils.formatMenuItemWeekday(item);
        await MenuItem.createMenuItemEntry(formatItem, estId);
      }
    }
    
  } catch(err) {
    console.log(err);
    res.status(500).send({success: false, error: "Error creating a new establishment entry in the server."});
  }
}