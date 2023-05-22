const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello my server on express active changed!');
});

app.listen(port, () => {
  console.log('My Port is ' + port);
});
