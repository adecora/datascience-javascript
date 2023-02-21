const assert = require('assert')
const Database = require('../separate-database')

const FIXTURE = `
drop table if exists Workshop;

create table Workshop(
  ident    integer unique not null primary key,
  name     text unique not null,
  duration integer not null -- duration in minutes
);

insert into Workshop values (1, "Building Community", 60);
insert into Workshop values (2, "ENIAC Programming", 150);
`

describe('database', () => {

  const expected = [
    {
      workshopId: 1,
      workshopName: 'Building Community',
      workshopDuration: 60
    },
    {
      workshopId: 2,
      workshopName: 'ENIAC Programming',
      workshopDuration: 150
    }
  ]

  it('should return all workshops', (done) => {
    new Database('direct', FIXTURE).getAll([], (results) => {
      assert.deepEqual(results, expected, 'Got expected workshops.')
      done()
    })
  })

  it('should return one workshop', (done) => {
    new Database('direct', FIXTURE).getOne(1, (results) => {
      assert.deepEqual(results, expected.slice(0, 1), 'Got single expected workshop.')
      done()
    })
  })

  it('can only get workshops that exists', (done) => {
    new Database('direct', FIXTURE).getOne(99, (results) => {
      assert.deepEqual(results, [], 'Got no workshop matching nonexistent key.')
      done()
    })
  })
})