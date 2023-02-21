// Exercise1. copying records from the table Workshop in a database source.db to a table
// to a table with the same name in a new database backup.db
const sqlite3 = require('sqlite3')
const Database = require('./exercises-database')

const createBackup = (backup) => {
  const BACKUP = `
  drop table if exists Workshop;

  create table Workshop(
    ident    integer unique not null primary key,
    name     text unique not null,
    duration integer not null -- duration in minutes
  );
  `
  const db = new sqlite3.Database(backup, (err) => {
    if (err) console.error(`Error: ${err}, when created ${backup} database.`)
  })
  db.exec(BACKUP, (err) => {
    if (err) console.error(`Error: ${err}, when initialize ${backup} database.`)
  })
  return db
}

const makeBackup = (backupDB) => {
  return (rows) => {
    for (let { workshopName: name, workshopDuration: duration } of rows) {
      backupDB.addOne([name, duration], (result, id) => {
        console.log(`Save row ${id}.`)
      })
    }
  }
}

const main = () => {
  const [source, backup] = process.argv.slice(2)
  // Create the database if not exists and initialize to an empty Workshop table.
  createBackup(backup)

  const sourceDB = new Database('file', source)
  const backupDB = new Database('file', backup)
  // Create the backup.
  sourceDB.getAll([], makeBackup(backupDB))
}

main()