const mongoose = require('mongoose');
const Person = mongoose.model('Person');

module.exports.index = (req, res) => {
    mongoose.model('Person').find({}).then((results) => {
        console.log(results);
        res.json(results);
    }, (err) => {
        res.status(400).send(err);
    });
}

module.exports.insert = (req, res) => {
    
}