const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = 3418;
const root = process.argv[2];

// Main server object.
const app = express();

// Handle all requests.
app.use((req, res, next) => {
  const actual = path.join(root, req.url);
  
  if (actual.endsWith('.json')) {
    const data = fs.readFileSync(actual, 'utf-8');
    const json = JSON.parse(data);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(json);
  } else if (actual.endsWith('.jpg')) {
    const data = fs.readFileSync(actual, 'utf-8');
    res.setHeader('Content-Type', 'application/jpeg');
    res.status(200).send(data);
  } else if (actual.endsWith('.png')) {
    const data = fs.readFileSync(actual, 'utf-8');
    res.setHeader('Content-Type', 'application/png');
    res.status(200).send(data);
  } else {
    const data = fs.readFileSync(actual, 'utf-8');
    res.status(200).send(data);
  }
})

app.listen(PORT, () => { console.log(`listening on port ${PORT}...`) })