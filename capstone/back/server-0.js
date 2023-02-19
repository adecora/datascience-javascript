const express = require('express');
const cors = require('cors');

// 'dataManager' is a global variable that refers to our database.
// It must be set when the server is created.
let dataManager = null;

// Main server object.
const app = express();

// ...handle requests...
// Middleware to allow request from all origins.
app.use(cors())
// Middleware to parse req.params.
const middleware = (req, res, next) => {
  req.params.start = parseInt(req.params.start)
  req.params.end = parseInt(req.params.end)
  next()
}

// Get surveys statistics.
app.get('/survey/stats', (req, res, next) => {
  const data = dataManager.getSurveyStats()
  res.setHeader('Content-Type', 'application/json')
  res.status(200).send(data)
})

// Get a slice of the survey data.
app.get('/survey/:start/:end', middleware, (req, res, next) => {
  console.log(req.params)
  const { start, end } = req.params

  // Exercise2. Manage date errors.
  if (isNaN(start) || isNaN(end)) {
    console.log('bad')
    throw new Error('Invalid year date')
  }
  else if (end < start)
    throw new Error('Invalid year range')

  const data = dataManager.getSurveyRange(start, end)
  res.setHeader('Content-Type', 'application/json')
  res.status(200).send(data)
})

// Nothing else worked.
app.use((req, res, next) => {
  const page = `<html><body><p>error: "${req.url}" not found</p></body></html>`
  res.status(404).send(page)
})

// Exercise2. Manage date errors.
app.use((error, req, res, next) => {
  const page = `<html><body><p>error: <span style="color: red">"${error.message}"</span></p></body></html>`
  if (['Invalid year date', 'Invalid year range'].includes(error.message))
    res.status(400).send(page)
})

module.exports = (dbm) => {
  dataManager = dbm
  return app
}