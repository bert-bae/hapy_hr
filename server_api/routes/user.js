const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/:email/view', UserController.getUserByEmail);

router.post('/authenticate', UserController.authenticateUser);

module.exports = router;