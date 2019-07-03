const express = require('express');
const router = express.Router();
const VoucherController = require('../controllers/VoucherController');

router.get('/:voucherId/view', VoucherController.retrieveVoucher);

router.post('/:establishmentId/set', VoucherController.setVoucher);

router.post('/:voucherId/redeem', VoucherController.redeemVoucher);

router.post('/:voucherId/invalidate', VoucherController.invalidateVoucher);



module.exports = router;