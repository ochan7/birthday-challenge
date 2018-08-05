const express = require('express');
const router = express.Router();
const { getRoot, getBirthdays, addBirthday } = require('../controllers');

router.get('/', getRoot);

router
  .route('/birthdays')
  .get(getBirthdays)
  .post(addBirthday);

module.exports = router;
