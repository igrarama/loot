const mongoose = require('mongoose');
const ProductDef = mongoose.model('ProductDef');

module.exports.getById = (req, res) => {
    ProductDef.findOne({ _id: req.params.id }).then((result) => {
        res.json(result);
    }, (err) => {
        res.status(400).send(err);
    });
}

module.exports.query = (req, res) => {
    const limit = req.query.limit;
    delete req.query.limit;
    ProductDef.find(req.query).limit(limit).populate('type').then((results) => {
        res.json(results);
    }, (err) => {
        res.status(400).send(err);
    });
}