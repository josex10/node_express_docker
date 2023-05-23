const productsRoute = require('./products.route');
const usersRoute = require('./users.route');
const express = require('express');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRoute);
  router.use('/users', usersRoute);
}

module.exports = routerApi;
