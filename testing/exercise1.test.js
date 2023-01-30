const assert = require('assert');
const request = require('supertest');
const cheerio = require('cheerio');
const server = require('./server');

describe('server', () => {
  it('should return page as HTML with the correct headings', (done) => {
    request(server)
      .get('/asteroids')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        const tree = cheerio.load(res.text);
        assert.equal(tree('h1').length, 1, 'Correct number of headings');
        assert.equal(tree('h1').text(), 'Asteroids', 'Correct heading text');
        done();
      })
  })
})