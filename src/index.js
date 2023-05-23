const express = require('express');
const app = express();
const port = 3000;
const routerApi = require('./routes');

app.get('/', (req, res) => {
  res.send('Hello my server on express active changed!');
});

routerApi(app);

app.listen(port, () => {
  console.log('My Port is ' + port);
});
