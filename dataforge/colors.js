const fs = require('fs');
const DF = require('data-forge');

const text = fs.readFileSync(process.argv[2], 'utf-8');
const colors = DF.fromCSV(text);
console.log(colors.toArray());

// Colors in alphabetical order.
const sorted = colors.orderBy(row => row.name);
console.log(sorted.toArray());

// To sub-sort by another column.
const doubleSorted = colors
  .orderBy(row => row.green)
  .thenBy(row => row.blue)
  .dropSeries(['name', 'red']);
console.log(doubleSorted.toArray());

// Remove duplicates.
const notTheSame = colors.distinct(row => row.red);
console.log(notTheSame.toArray());

// Multi-column distinct doesn't work.
// In JavaScript, two arrays are only equal if they're the same object, i.e. [0] === [0] is false.
const multiColumn = colors
  .distinct(row => [row.red, row.green])
  .orderBy(row => row.red)
  .thenBy(row => row.green);
console.log(multiColumn.toArray());