const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { errorHandler } = require('./controllers');
const apiRouter = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', apiRouter);
app.use(errorHandler);
app.use('/*', (req, res) => {
  res.status(404).send({
    message: 'PAGE NOT FOUND',
  });
});

module.exports = app;
