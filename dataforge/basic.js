const DF = require('data-forge');

// DataFrame from a list of objects.
const fromObjects = new DF.DataFrame([
  { ones: 1, tens: 10 },
  { ones: 2, tens: 20 },
  { ones: 3, tens: 30 },
])

console.log('fromObjects:\n', fromObjects);
console.log('fromObjects as array:\n', fromObjects.toArray());

// DataFrame from names of the columns in one list, and the rows values in another.
const fromSpec = new DF.DataFrame({
  columnNames: ['ones', 'tens'],
  rows: [
    [4, 40],
    [5, 50],
    [6, 60]
  ]
})

console.log('fromSpec as array:\n', fromSpec.toArray());

// DataFrame from a file.
const text = `ones,tens
7,70
8,80
9,90`;
const fromText = new DF.fromCSV(text);
console.log('fromText as array:\n', fromText.toArray());

// ask for columns names.
console.log(fromText.getColumnNames());

// ask for content as a list of lists.
console.log(fromText.toRows());

// process rows using a for loop.
for (let row of fromText)
  console.log(row);

// also works with a forEach loop.
fromText.forEach((row) => {
  console.log(row);
})