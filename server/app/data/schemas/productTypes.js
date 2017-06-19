const mongoose = require('mongoose');

const productTypeSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: String,
    tags: [String],
    attributes: [mongoose.Schema.Types.Mixed]
});

const ProductType = mongoose.model('ProductType', productTypeSchema);