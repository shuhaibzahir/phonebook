const express = require('express');
const router = express.Router();
const spamController = require('../controllers/spamController');

//here updating a spam number with value isSPam = true or false : default is True
router.post('/',spamController.updateSpamNumber);

module.exports = router;
