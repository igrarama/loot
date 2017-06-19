const mongoose = require('mongoose');
const ProductType = mongoose.model('ProductType');

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