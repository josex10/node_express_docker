const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No paramaters received');
  }
});

module.exports = routes;
