const express = require('express');
const router = express.Router();
const peopleController = require('./controllers/people');
const productsController = require('./controllers/products');
const productTypesController = require('./controllers/productTypes');
const transactionsController = require('./controllers/transactions');
const ordersController = require('./controllers/orders');

// People
router.get('/people', peopleController.query);
router.get('/people/:id', peopleController.getById);

// Orders
router.get('/orders', ordersController.query);
router.get('/orders', ordersController.getById);

module.exports = router;

