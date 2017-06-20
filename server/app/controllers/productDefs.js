const mongoose = require('mongoose');
const ProductDef = mongoose.model('ProductDef');

module.exports.getById = (req, res) => {
    ProductDef.findOne({ _id: req.params.id }).populate('type').then((result) => {
        res.json(result);
    }, (err) => {
        res.status(400).send(err);
    });
}

module.exports.query = (req, res) => {
    const limit = req.query.limit;
    delete req.query.limit;
    ProductDef.find(req.query).populate('type').limit(limit).then((results) => {
        res.json(results);
    }, (err) => {
        res.status(400).send(err);
    });
}

module.exports.create = (req, res) => {
    const productDef = new ProductDef(req.body);
    productDef.save((err) => {
        if (err)  {
            res.status(400).send(err);
        }
        else {
            res.status(200).send();
        }
    });
}