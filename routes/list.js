const path = require('path');

const express = require('express');

const remindersController = require('../controllers/reminder');

const router = express.Router();

router.get('/', remindersController.getNewReminders);

module.exports = router;
