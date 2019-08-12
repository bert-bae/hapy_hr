const express = require('express');
const router = express.Router();
const EstablishmentController = require('../controllers/EstablishmentController');

router.get('/', EstablishmentController.getAllEstablishments);

router.get('/distance', EstablishmentController.getNearbyEstablishmentsByDistance);

router.get('/:establishmentId', EstablishmentController.getSingleEstablishment);

router.post('/create', EstablishmentController.createNewEstablishmentEntry);

module.exports = router;