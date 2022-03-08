const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
  res.send('Olá express')
});

app.listen(port, function() {
  console.log(`Examplo de app escutando na   porta ${port}!`)
});
