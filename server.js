const express = require('express');
const app = express();
const apiRouter = require('./routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRouter);

module.exports = app;
