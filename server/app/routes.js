const express = require('express');
const router = express.Router();
const peopleController = require('./controllers/people');
const productsController = require('./controllers/products');
const productDefsController = require('./controllers/productDefs');
const productTypesController = require('./controllers/productTypes');
const transactionsController = require('./controllers/transactions');
const ordersController = require('./controllers/orders');

// People
router.get('/people', peopleController.query);
router.get('/people/:id', peopleController.getById);

// Orders
router.get('/orders', ordersController.query);
router.get('/orders/:id', ordersController.getById);
router.post('/orders', ordersController.create);

// ProductTypes
router.get('/productTypes', productTypesController.query);
router.get('/productTypes/:id', productTypesController.getById);

// ProductDefs
router.get('/productDefs', productDefsController.query);
router.get('/productDefs/:id', productDefsController.getById);

// Products
router.get('/products', productsController.query);
router.get('/products/:id', productsController.getById);

module.exports = router;

