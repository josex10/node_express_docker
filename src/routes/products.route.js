const express = require('express');
const { faker } = require('@faker-js/faker');
const routes = express.Router();

let products = [];

routes.get('/', (req, res) => {
  for (let x = 0; x < 100; x++) {
    products.push({
      id: faker.string.uuid(),
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      image: faker.image.url(),
    });
  }
  res.json(products);
});

routes.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'product 1',
    price: 1000,
  });
});

module.exports = routes;
