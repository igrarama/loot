const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    sender: { type: 'ObjectId', ref: 'Person' },
    receiver: { type: 'ObjectId', ref: 'Person' },
    product: { type: 'ObjectId', ref: 'Product' },
    approver: { type: 'ObjectId', ref: 'Person' },
    transactionTime: Date,
    status: String,
    active: Boolean
});

const Transaction = mongoose.model('Transaction', transactionSchema);