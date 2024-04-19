const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

router.get('/', searchController.searchByName);
router.get('/:phoneNumber', searchController.searchByPhoneNumber);

module.exports = router;
