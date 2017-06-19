const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    customer: { type: 'ObjectId', ref: 'Person' },
    status: String,
    active: Boolean,
    products: [{ type: 'ObjectId', ref: 'Product' }],
    reason: String,
    comments: [String]
});

const Order = mongoose.model('Order', orderSchema);