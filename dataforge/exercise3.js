const fs = require('fs');
const DF = require('data-forge');

const text = fs.readFileSync('../assets/colors.csv', 'utf-8');
const colors = DF
  .fromCSV(text)
  .subset(['red', 'green'])
  .distinct(row => JSON.stringify([row.red, row.green]))
  .orderBy(row => row.red)
  .thenBy(row => row.green);

console.log(colors.detectTypes().toString());
console.log(colors.toArray());