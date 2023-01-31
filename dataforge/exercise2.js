const fs = require('fs');
const DF = require('data-forge');

const text = fs.readFileSync('../assets/colors.csv', 'utf-8');
const colors = DF
  .fromCSV(text)
  .parseFloats(['red', 'green', 'blue'])
  .orderBy(row => row.red)
  .thenByDescending(row => row.green);

console.log(colors.detectTypes().toString());
console.log(colors.toArray());