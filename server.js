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

// 404
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// 500
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    const validationMessages = [];
    if (err.errors) {
        Object.getOwnPropertyNames(err.errors)
        .forEach(propName => {
            validationMessages.push(err.errors[propName].message);
        });
    }
    res.send({
        error: {
            message: err.message,
            validationMessages
        }
    });
});

app.listen(3000, () => {
    console.log('Web server listening for incoming requests.');
});