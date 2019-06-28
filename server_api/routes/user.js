const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/authenticate', UserController.authenticateUser);

module.exports = router;