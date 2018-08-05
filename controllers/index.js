let data = require('../data');

module.exports = {
  getRoot(req, res) {
    res.status(200).send({ status: 'OK' });
  },
  getBirthdays(req, res) {
    res.status(200).send(data);
  },
  addBirthday(req, res, next) {
    const newPerson = req.body;
    if (newPerson.birthday && newPerson.name) {
      data.push(newPerson);
      res.status(201).send(newPerson);
    } else {
      return next({ status: 400, message: 'BAD REQUEST' });
    }
  },
  deleteBirthdayById(req, res, next) {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < data.length) {
      data = data.slice(0, id).concat(data.slice(id + 1));
      res.status(204).send();
    } else {
      next({ status: 400, message: 'BAD REQUEST' });
    }
  },
  /* eslint no-unused-vars: ["error", { "args": "none" }] */
  errorHandler(err, req, res, next) {
    const statusCode = err.status || 400;
    const message = err.message || 'BAD REQUEST';
    res.status(statusCode).send({ message });
  },
};
