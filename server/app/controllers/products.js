const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports.getById = (req, res) => {
    Product.findOne({ _id: req.params.id }).then((result) => {
        res.json(result);
    }, (err) => {
        res.status(400).send(err);
    });
}

module.exports.query = (req, res) => {
    const limit = req.query.limit;
    delete req.query.limit;
    Product.find(req.query).populate('productDef currentOwner').limit(limit).then((results) => {
        res.json(results);
    }, (err) => {
        res.status(400).send(err);
    });
}