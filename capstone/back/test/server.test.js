const path = require('path')
const assert = require('assert')
const requests = require('supertest')
const DataManager = require('../data-manager')
const make_server = require('../server-0')

const TEST_DATA_PATH = path.resolve(__dirname, 'test-data.csv')

describe('server', () => {
  const db = new DataManager(TEST_DATA_PATH)
  const server = make_server(db)

  it('should return statistics about survey data', (done) => {
    const expected = {
      year_low: 1979,
      year_high: 2000,
      record_count: 10,
      female: 3,
      male: 5
    }

    requests(server)
      .get('/survey/stats')
      .expect(200)
      .expect('Content-Type', 'application/json')
      .end((err, res) => {
        assert.deepEqual(res.body, expected, '')
        done()
      })
  })

  // Exercise3. Adding more tests.
  it('should return a slice of the survey data', (done) => {
    const expected = [
      {
        "key": "1998",
        "year": 1998,
        "min_hindfoot_length": 25,
        "ave_hindfoot_length": 25,
        "max_hindfoot_length": 25,
        "min_weight": 31,
        "ave_weight": 31,
        "max_weight": 31
      },
      {
        "key": "2000",
        "year": 2000,
        "min_hindfoot_length": 0,
        "ave_hindfoot_length": 0,
        "max_hindfoot_length": 0,
        "min_weight": 0,
        "ave_weight": 0,
        "max_weight": 0
      }
    ]

    requests(server)
      .get('/survey/1995/2000')
      .expect(200)
      .expect('Content-Type', 'application/json')
      .end((err, res) => {
        assert.deepEqual(res.body, expected, '')
        done()
      })
  })
})
