const express = require('express');

const app = express();

app.use('/', function(req, res) {
  res.send('<h1>Hello server!</h1>')
})

app.listen(3000)
