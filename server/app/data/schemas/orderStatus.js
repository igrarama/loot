const mongoose = require('mongoose');

const orderStatusSchema = mongoose.Schema({
    name: String
}, { collection: 'orderStatuses' });

const OrderStatus = mongoose.model('OrderStatus', orderStatusSchema);