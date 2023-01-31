const fs = require('fs');
const DF = require('data-forge');

const text = fs.readFileSync('../assets/national_parks.csv', 'utf-8');
const data = DF
  .fromCSV(text)
  .generateSeries({
    yearNum: row => parseFloat(row.year),
    visitorsNum: row => parseFloat(row.visitors)
  })
  .where(row => (isNaN(row.yearNum) || isNaN(row.visitorsNum)))
  .subset(['year', 'visitors'])

console.log(`There is ${data.count()} rows with NaN visitors or year values.`)
console.log(data.toString());