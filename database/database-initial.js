const sqlite3 = require('sqlite3')

const Q_WORKSHOP_GET_ALL = `
select
  Workshop.ident    as workshopId,
  Workshop.name     as workshopName,
  Workshop.duration as workshopDuration
from
  Workshop;
`

const Q_WORKSHOP_GET_ONE = `
select
  Workshop.ident    as workshopId,
  Workshop.name     as workshopName,
  Workshop.duration as workshopDuration
from
  Workshop
where
  Workshop.ident = ?;
`

class Database {
  constructor (path) {
    this.db = new sqlite3.Database(path, sqlite3.OPEN_READWRITE, (err) => {
      if (err) this.fail(`Database open error ${error} for "${path}"`)
    })
  }

  getAll (args) {
    this.db.all(Q_WORKSHOP_GET_ALL, [], (err, rows) => {
      if (err) this.fail(err)
      this.display(rows)
    })
  }

  getOne (args) {
    this.db.all(Q_WORKSHOP_GET_ONE, args, (err, rows) => {
      if (err) this.fail(err)
      this.display(rows)
    })
  }

  display (rows) {
    for (let row of rows) {
      console.log(row)
    }
  }

  fail (msg) {
    console.log(msg)
    process.exit(1)
  }
}

const main = () => {
  const path = process.argv[2]
  const action = process.argv[3]
  const args = process.argv.slice(4)
  console.log(args, process.argv.splice(4))
  const database = new Database(path)
  database[action](args)
}

main()