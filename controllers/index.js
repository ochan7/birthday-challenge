let data = require('../data');

module.exports = {
  getRoot(req, res) {
    res.status(200).send({ status: 'OK' });
  },
  getBirthdays(req, res) {
    res.status(200).send(data);
  },
  addBirthday(req, res) {
    const newPerson = req.body;
    if (newPerson.birthday && newPerson.name) {
      data.push(newPerson);
      res.status(201).send(newPerson);
    } else {
      res.status(400).send({ message: 'BAD REQUEST' });
    }
  },
  deleteBirthdayById(req, res) {
    const id = parseInt(req.params.id);
    data = data.slice(0, id).concat(data.slice(id + 1));
    res.status(204).send();
  },
};
