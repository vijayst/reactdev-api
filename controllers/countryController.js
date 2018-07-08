const CountryModel = require('../models/CountryModel');

class CountryController {
    post(req, res, next) {
        const { name } = req.body;
        const model = new CountryModel({ name });
        model.save()
        .then(() => {
            res.send({ success: true });    
        })
        .catch(error => {
            const errorObject = new Error('Error in saving country');
            errorObject.errors = error.errors;
            next(errorObject);
        });
    }

    get(req, res) {
        CountryModel.find({})
        .then(countries => {
            res.send(countries);
        });
    }

    delete(req, res) {
        CountryModel.remove({})
        .then(() => {
            res.send({ success: true });
        });
    }
}

module.exports = new CountryController();