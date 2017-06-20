const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productDef: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductDef' }, 
    currentOwner: { type: mongoose.Schema.Types.ObjectId, ref: 'Person' },
    isInUse: Boolean,
    issueDate: Date,
    lastTransactionTime: Date,
    serialNumber: String,
    productAttributes: mongoose.Schema.Types.Mixed
});

const Product = mongoose.model('Product', productSchema);