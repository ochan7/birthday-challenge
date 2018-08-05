let data = require('../data');

module.exports = {
  getRoot(req, res) {
    res.status(200).send({ status: 'OK' });
  },
  getBirthdays(req, res) {
    res.status(200).send(data);
  },
};
