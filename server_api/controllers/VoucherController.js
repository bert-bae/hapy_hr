'use strict';

const User = require('../models/user');
const Voucher = require('../models/voucher');

exports.setVoucher = async (req, res, next) => {
  const userId = req.body.userId;
  const expiresAt = req.body.expiresAt;
  const establishmentId = req.params.establishmentId;
  if (!Number(userId)) {
    res.send({ success: false, err: "Login is required before creating a voucher.", voucher: null });
    return;
  }
  try {
    // If isNew is null, means that a valid voucher exists
    // Prompt for replacement confirmation... otherwise, create a new Voucher in the database
    const isNew = await Voucher.setVoucher(establishmentId, userId, expiresAt);
    if (!isNew) {
      res.send({ success: false, err: "Voucher is set on another location. Do you want to replace it?", prompt: true})
      return;
    }
    const voucher = await Voucher.getLastInsertFromUser();
    res.send({ success: true, err: null, voucher });
  } catch(err) {
    res.send({ success: false, err: "Server error setting Voucher.", prompt: false });
  }
}

exports.getVoucher = async (req, res, next) => {
  const voucherId = req.params.voucherId;
  try {
    const voucher = await Voucher.getVoucher(voucherId);
    res.send({ success: true, err: null, voucher: voucher });
  } catch(err) {
    res.send({ success: false, err: "Voucher could not be retrieved from the server.", voucher: null });
  }
}

exports.redeemVoucher = async (req, res, next) => {
  const voucherId = req.params.voucherId;
  try {
    const update = await Voucher.redeemVoucher(voucherId);
    res.send({ success: true, err: null });
  } catch(err) {
    res.send({ success: false, err: "Voucher could not be redeemed from the server.", voucher: null })
  }
}

exports.invalidateVoucher = async (req, res, next) => {
  const voucherId = req.params.voucherId;
  console.log(`this is the voucher id ${voucherId}`)
  try {
    await Voucher.invalidateVoucher(voucherId);
    res.send({ success: true, err: null });
  } catch(err) {
    res.send({ success: false, err: "Voucher invalidation could not be completed in the server." });
  }
}

exports.retrieveVoucher = async (req, res, next) => {
  res.send('hello');
}