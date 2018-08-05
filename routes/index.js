const express = require('express');
const router = express.Router();
const { getRoot, getBirthdays } = require('../controllers');

router.get('/', getRoot);

router.route('/birthdays').get(getBirthdays);

module.exports = router;
