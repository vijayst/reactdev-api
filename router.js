const express = require('express');
const router = express.Router();
const CountryController = require('./controllers/CountryController');

router.post('/country', CountryController.post);
router.get('/countries', CountryController.get);
router.delete('/countries', CountryController.delete);

module.exports = router;