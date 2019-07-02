const express = require('express');
const router = express.Router();
const VoucherController = require('../controllers/VoucherController');

router.get('/:voucherId/view', VoucherController.retrieveVoucher);

router.post('/:establishmentId/set', VoucherController.setVoucher);

router.post('/:establishmentId/redeem', VoucherController.redeemVoucher);

router.post('/:establishmentId/cancel', VoucherController.cancelVoucher);



module.exports = router;