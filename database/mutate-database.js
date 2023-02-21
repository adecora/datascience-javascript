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
const Q_WORKSHOP_ADD = `
insert into Workshop (name, duration) values (?, ?);
`

const Q_WORKSHOP_DELETE = `
delete from Workshop where ident = ?;
`

class Database {
  constructor (mode, arg) {
    switch (mode) {
      case 'direct':
        this._inMemory(arg)
        break

      case 'memory':
        const setup = fs.readFileSync(arg, 'utf-8')
        this._inMemory(setup)
        break
      
      case 'file':
        this._inFile(arg)
        break
      
      default:
        this._fail(`Unknown mode "${mode}"`)
        break
    }
  }
   
  getAll (args, callback) {
    this.db.all(Q_WORKSHOP_GET_ALL, [], (err, rows) => {
      if (err) this._fail(err)
      callback(rows)
    })
  }
   
  getOne (args, callback) {
    this.db.all(Q_WORKSHOP_GET_ONE, args, (err, rows) => {
      if (err) this._fail(err)
      callback(rows)
    })
  }
  
  addOne (args, callback) {
    this.db.run(Q_WORKSHOP_ADD, args, function (err, rows) {
      if (err) this._fail(err)
      callback([], this.lastID)
    })
  }

  deleteOne (args, callback) {
    this.db.run(Q_WORKSHOP_DELETE, args, (err, rows) => {
      if (err) this._fail(err)
      callback([], undefined)
    })
  }

  _display (rows) {
    for (let row of rows) {
      console.log(row)
    }
  }
  
  _fail (msg) {
    console.log(msg)
    process.exit(1)
  }

  _inMemory (script) {
    this.db = new sqlite3.Database(':memory:', sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        this._fail(`In-memory database open error "${err}"`)
      }
    })
    this.db.exec(script, (err) => {
      if (err) {
        this._fail(`Unable to initialize in-memory database from "${script}"`)
      }
    })
  }

  _inFile (path) {
    this.db = new sqlite3.Database(path, sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        this._fail(`Database open error "${err}" for "${path}"`)
      }
    })
  }
}

module.exports = Database