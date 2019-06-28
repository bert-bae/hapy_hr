const express = require('express');
const router = express.Router();
const VoucherController = require('../controllers/VoucherController');

router.get('/test', VoucherController.test);

module.exports = router;