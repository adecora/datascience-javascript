const express = require('express');
const path = require('path');
const fs = require('fs/promises');

const PORT = 3418;
const root = process.argv[2];

// Main server object.
const app = express();

// Handle all requests.
app.use(async (req, res, next) => {
  const actual = path.join(root, req.url);
  const data = await fs.readFile(actual, 'utf-8');
  res.status(200).send(data);
})

app.listen(PORT, () => { console.log(`listening on port ${PORT}...`); })