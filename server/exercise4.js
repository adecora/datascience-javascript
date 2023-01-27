const express = require('express');

const PORT = 3418;

// Main server object.
const app = express();

// Query parser.
app.use((req, res, next) => {
  req.query.left = parseInt(req.query.left);
  req.query.right = parseInt(req.query.right);
  next();
})

app.get('/add', (req, res, next) => {
  const { left, right } = req.query;
  const add = left + right;
  res.status(200).send(`<html><body><h1>${left} + ${right} = ${add}</h1></body></html>`);
})

app.get('/subtract', (req, res, next) => {
  const { left, right } = req.query;
  const subtract = left - right;
  res.status(200).send(`<html><body><h1>${left} - ${right} = ${subtract}</h1></body></html>`);
})

// Handle missing routes.
app.use((req, res, next) => {
  res.status(404).send(`<html><body><p>ERROR: ${req.url} not found</p></body></html>`);
})

app.listen(PORT, () => { console.log(`listening on port ${PORT}...`); })