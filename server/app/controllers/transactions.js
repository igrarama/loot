const mongoose = require('mongoose');
const Transaction = mongoose.model('Transaction');

module.exports.getById = (req, res) => {
    Transaction.findOne({ _id: req.params.id }).populate('sender receiver product approver').then((result) => {
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

module.exports.create = (req, res) => {
    const transaction = new Transaction(req.body);
    transaction.status = 'ממתין לאישור חייל מקבל';
    transaction.active = true;
    transaction.transactionTime = new Date();
    transaction.save((err, newTransaction) => {
        if (err) {
            res.status(400).send(err);
        }
        else {
            res.set('Location', '/transactions/' + newTransaction.id);
            res.status(200).send();
        }
    });
}

module.exports.update = (req, res) => {
    Transaction.updateOne({ _id: req.params.id }, req.body, (err) => {
        if (err) {
            res.status(400).send(err);
        }
        else {
            res.status(200).send();
        }
    });
}