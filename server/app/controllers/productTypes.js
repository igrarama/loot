const mongoose = require('mongoose');
const ProductType = mongoose.model('ProductType');
const _ = require('lodash');

module.exports.getById = (req, res) => {
    ProductType.findOne({ _id: req.params.id }).then((result) => {
        res.json(result);
    }, (err) => {
        res.status(400).send(err);
    });
}

module.exports.query = (req, res) => {
    const limit = req.query.limit;
    delete req.query.limit;
    ProductType.find(req.query).limit(limit).then((results) => {
        res.json(results);
    }, (err) => {
        res.status(400).send(err);
    });
}

module.exports.getAllTags = (req, res) => {
    ProductType.find({}).select('tags').then((results) => {
        const distinctTags = _.union(..._.map(results, 'tags'));
        res.json(distinctTags);
    }, (err) => {
        res.status(400).send(err);
    });
}