const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const router = require('./router');

const mongoDB = 'mongodb://localhost/reactdev';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
app.use(bodyParser.json());
app.use(logger('tiny'));
app.use(router);

app.listen(3000, () => {
    console.log('Web server listening for incoming requests.');
});