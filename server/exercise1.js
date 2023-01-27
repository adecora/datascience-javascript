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
  const data = fs.readFileSync(actual, 'utf-8');
  res.status(200).send(data);
})

// Handle error, must be placed after routes.
app.use((err, req, res, next) => {
  console.error(err.message);
  if (err.code === 'ENOENT')
    res
      .status(404)
      .send(`<html><body><p>ERROR: ${req.url} not found</p></body></html>`);
  else if (err.code === 'EACCES')
    res
      .status(401)
      .send(`<html><body><p>ERROR: Unauthorized access to ${req.url}</p></body></html>`);
})

app.listen(PORT, () => { console.log(`listening on port ${PORT}...`)})