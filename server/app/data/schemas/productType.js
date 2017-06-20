const mongoose = require('mongoose');

const productTypeSchema = mongoose.Schema({
    name: String,
    category: String,
    tags: [String],
    attributes: [mongoose.Schema.Types.Mixed]
}, { collection: 'productTypes' });

const ProductType = mongoose.model('ProductType', productTypeSchema);