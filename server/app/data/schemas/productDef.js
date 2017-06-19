const mongoose = require('mongoose');

const productDefSchema = mongoose.Schema({
    name: String,
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductType' },
    description: String,
    isInStock: Boolean,
    price: Number,
    productAttributes: mongoose.Schema.Types.Mixed
});

const ProductDef = mongoose.model('ProductDef', productDefSchema);