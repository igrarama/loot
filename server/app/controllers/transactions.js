const mongoose = require('mongoose');
const Transaction = mongoose.model('Transaction');

module.exports.getById = (req, res) => {
    Transaction.findOne({ _id: req.params.id }).then((result) => {
        res.json(result);
    }, (err) => {
        res.status(400).send(err);
    });
}

module.exports.query = (req, res) => {
    const limit = req.query.limit;
    delete req.query.limit;
    Transaction.find(req.query).populate('sender receiver product approver').limit(limit).then((results) => {
        res.json(results);
    }, (err) => {
        res.status(400).send(err);
    });
}