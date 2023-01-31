const DF = require('data-forge');

const data = new DF.DataFrame([
  { ones: 1, tens: 10 },
  { ones: 2, tens: 20 },
  { ones: 3, tens: 30 },
])
const double_oh = new DF.Series([100, 200, 300]);

const withHundreds = data.withSeries({ hundreds: double_oh });
console.log(withHundreds.toArray());

// We told Data-Forge how to generate new columns from existing values with callbacks functions.
// generateSeries method recieve an object whose keys are the names of the new columns, and
// whose values are callbacks taking a row as input and producing a new value as output.
const sumAndProducts = data.generateSeries({
  row: row => row.ones + row.tens,
  product: row => row.ones * row.tens
})
console.log(sumAndProducts.toArray());

// Get rid of columns entirely.
const justResults = sumAndProducts.dropSeries(['ones', 'tens']);
console.log(justResults.toArray());

// Since every DataFrame method returns a DataFrame, we can use method chaining to combine
// operations.
const result = data
  .withSeries({ hundreds: double_oh })
  .generateSeries({
    sum: ({ones, tens, hundreds}) => ones + tens + hundreds
  })
  .dropSeries(['ones', 'tens', 'hundreds'])
  .toArray();

console.log(result);