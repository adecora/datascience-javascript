const Database = require('./exercises-database')

const display = (rows) => {
  for (let row of rows) {
    console.log(row)
  }
}

const main = () => {
  let [mode, path, action, ...args] = process.argv.slice(2)
  const db = new Database(mode, path)
  if (!(action in db)) {
    db._fail(`No such operation "${action}"`)
  }
  const result = db[action](args, display)
}

main ()