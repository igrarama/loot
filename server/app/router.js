const express = require('express');
const peopleController = require('./controllers/people');
const productsController = require('./controllers/products');
const productTypesController = require('./controllers/productTypes');
const transactionsController = require('./controllers/transactions');

module.exports = (app) => {
    app.get('/people', peopleController.query);
    app.get('/people/:id', peopleController.getById);
}

