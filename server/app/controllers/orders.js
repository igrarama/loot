const mongoose = require('mongoose');
const Order = mongoose.model('Order');

module.exports.getById = (req, res) => {
    Order.findOne({ _id: req.params.id }).then((result) => {
        res.json(result);
    }, (err) => {
        res.status(400).send(err);
    });
}

module.exports.query = (req, res) => {
    const limit = req.query.limit;
    delete req.query.limit;
    Order.find(req.query).populate('customer products').limit(limit).then((results) => {
        res.json(results);
    }, (err) => {
        res.status(400).send(err);
    });
}

module.exports.create = (req, res) => {
    const order = new Order(req.body);
    order.save((err) => {
        if (err)  {
            res.status(400).send(err);
        }
        else {
            res.status(204).send();
        }
    });
}

module.exports.addComment = (req, res) => {
    Order.updateOne(
        { _id: req.params.id },
        { $push: { comments: req.body.comment } }, (err) => {
            if (err) {
                res.status(400).send(err);
            }
            else {
                res.status(204).send();
            }
        });
}