const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    consign = require('consign'),
    cors = require('cors'),
    config = require('./index.js'),
    database = require('./database')(mongoose, config);

app.use(express.static('.'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.set('wqsapp', config.secret);

consign({ cwd: 'services' })
    .include('../models/index.js')
    .then('../api')
    .then('../routes')
    .into(app);

module.exports = app;