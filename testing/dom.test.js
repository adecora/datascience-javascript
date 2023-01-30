const assert = require('assert');
const request = require('supertest');
const cheerio = require('cheerio');
const server = require('./server');

describe('server', () => {
  it('should have the correct headings', (done) => {
    request(server)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        const tree = cheerio.load(res.text);
        assert.equal(tree('h1').length, 1, 'Correct number of headings');
        assert.equal(tree('h1').text(), 'Home', 'Correct heading text');
        done();
      })
  })
})