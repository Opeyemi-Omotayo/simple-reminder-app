const path = require('path');

const express = require('express');

const remindersController = require('../controllers/reminder');

const router = express.Router();

router.get('/set-reminder', remindersController.setReminder);

router.post('/set-reminder', remindersController.postsetReminder );

module.exports = router;
