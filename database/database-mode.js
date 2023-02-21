// For testing purposes, it's faster an safer to use an in-memory database.
// in-memory database: A database that is stored in memory rather than in 
// permament storage. In-memory databases are often used for testing.
const sqlite3 = require('sqlite3')
const fs = require('fs')

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
  constructor (mode, path) {
    this.path = path
    switch (mode) {
      case 'memory':
        const setup = fs.readFileSync(this.path, 'utf-8')
        this.db = new sqlite3.Database(':memory:', sqlite3.OPEN_READWRITE, (err) => {
          if (err) {
            this.fail(`In-memory database open error "${err}"`)
          }
        })
        this.db.exec(setup, (err) => {
          if (err) {
            this.fail(`Cannot initialize in-memory database from "${this.path}"`)
          }
        })
        break
      
      case 'file':
        this.db = new sqlite3.Database(this.path, sqlite3.OPEN_READWRITE, (err) => {
          if (err) {
            this.fail(`Database open error ${err} for "${path}"`)
          }
        })
        break
      
      default:
          this.fail(`Unknown mode "${mode}"`)
          break
    }
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
  const [mode, path, action, ...args] = process.argv.slice(2)
  const database = new Database(mode, path)
  database[action](args)
}

main()