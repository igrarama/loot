const mongoose = require('mongoose');
const Person = mongoose.model('Person');

module.exports.index = (req, res) => {
    Person.find({}).then((results) => {
        res.json(results);
    }, (err) => {
        res.status(400).send(err);
    });
}

module.exports.getById = (req, res, id) => {
    Person.findOne({ id: id }).then((result) => {
        res.json(result);
    }, (err) => {
        res.status(400).send(err);
    });
}

module.exports.insert = (req, res) => {
    
}