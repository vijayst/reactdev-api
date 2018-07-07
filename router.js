const express = require('express');
const router = express.Router();
const countryController = require('./controllers/countryController');

router.post('/country', countryController.post);
router.get('/countries', countryController.get);

module.exports = router;