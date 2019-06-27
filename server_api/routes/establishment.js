const express = require('express');
const router = express.Router();
const EstablishmentController = require('../controllers/EstablishmentController');

router.get('/', EstablishmentController.getAllEstablishments);

router.get('/:establishmentId', EstablishmentController.getSingleEstablishment);

module.exports = router;