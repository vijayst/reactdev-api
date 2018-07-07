const CountryModel = require('../models/countryModel');

class CountryController {
    post(req, res) {
        const { name } = req.body;
        const model = new CountryModel({ name });
        model.save();
        res.send({ success: true });
    }

    get(req, res) {
        CountryModel.find({})
        .then(countries => {
            res.send(countries);
        });
    }
}

module.exports = new CountryController();