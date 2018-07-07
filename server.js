const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();
app.use(bodyParser.json());
app.use(logger('tiny'));

app.listen(3000, () => {
    console.log('Web server listening for incoming requests.');
});