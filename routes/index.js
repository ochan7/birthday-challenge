const express = require('express');
const router = express.Router();
const {
  getRoot,
  getBirthdays,
  addBirthday,
  deleteBirthdayById,
} = require('../controllers');

router.get('/', getRoot);

router
  .route('/birthdays')
  .get(getBirthdays)
  .post(addBirthday);

router.delete('/birthdays/:id', deleteBirthdayById);

module.exports = router;
