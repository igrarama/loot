const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    customer: { type: 'ObjectId', ref: 'Person' },
    status: { type: 'ObjectId', ref: 'OrderStatus' },
    active: Boolean,
    products: [{ type: 'ObjectId', ref: 'ProductDef' }],
    reason: String,
    comments: [mongoose.Schema.Types.Mixed]
});

const Order = mongoose.model('Order', orderSchema);