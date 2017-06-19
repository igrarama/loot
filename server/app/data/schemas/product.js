const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: String,
    currentOwner: { type: mongoose.Schema.Types.ObjectId, ref: 'Person' },
    isInStock: Boolean,
    description: String,
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductType' },
    price: Number,
    isInUse: Boolean,
    issueDate: Date,
    serialNumber: String,
    productAttributes: [mongoose.Schema.Types.Mixed]
});

const Product = mongoose.model('Product', productSchema);