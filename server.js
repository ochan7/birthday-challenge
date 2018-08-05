const express = require('express');
const app = express();
const apiRouter = require('./routes');
const bodyParser = require('body-parser');
const { errorHandler } = require('./controllers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRouter);
app.use(errorHandler);
app.use('/*', (req, res) => {
  res.status(404).send({
    message: 'PAGE NOT FOUND',
  });
});

module.exports = app;
