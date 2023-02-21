const assert = require('assert')
const Database = require('../exercises-database')

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

  it('can add a workshop', (done) => {
    const duration = 35
    const name = 'Creating Bugs'
    const db = new Database('direct', FIXTURE)
    db.addOne([name, duration], (results, lastID) => {
      assert.deepEqual(results, [], 'Got empty list as result when adding.')
      assert.equal(3, 3, 'Got the correct last ID after adding.')

      db.getAll([], (results) => {
        assert.deepEqual(
          results, 
          [...expected, { workshopId: 3, workshopName: name, workshopDuration: duration }],
          'Got expected workshop after add.'
        )
        done()
      })
    })
  })

  it('can delete a workshop', (done) => {
    const db = new Database('direct', FIXTURE)
    db.deleteOne([1], (results, lastID) => {
      assert.equal(lastID, undefined, 'Expected last ID to be undefined.')
      assert.deepEqual(results, [], 'Got empty list as result when deleting.')

      db.getAll([], (results) => {
        assert.deepEqual(results, expected.slice(1), 'Got expected workshop after delete.')
        done()
      })
    })
  })

  // Exercise2. Filtering records.
  it('should return only one filter value', (done) => {
    const db = new Database('direct', FIXTURE)
    db.getLongerThan(100, (results) => {
      assert.deepEqual(results, expected.slice(1), 'Got single expected row.')
      done()
    })
  })

  // Exercise3. More filtering.
  it('should return only one row within the duration range', (done) => {
    const db = new Database('direct', FIXTURE)
    db.getWithinLengthRange([50, 100], (results) => {
      assert.deepEqual(results, expected.slice(0, 1), 'Got single expected row.')
      done()
    })
  })
})