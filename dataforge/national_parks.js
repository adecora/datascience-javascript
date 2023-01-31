const fs = require('fs');
const DF = require('data-forge');

const text = fs.readFileSync('../assets/national_parks.csv', 'utf-8');
const raw = DF.fromCSV(text);
console.log(raw.head(2).toArray());

// DataFrame method detectTypes show us the frequency of data types in our DataFrame.
const typesDf = raw.detectTypes();
console.log(typesDf.toString());

// See if any values are NA.
const cleaned = raw
  .where(row => ((row.year != 'NA') && (row.visitors != 'NA')));
console.log(`${raw.count()} original rows and ${cleaned.count()} cleaned rows`);

// Let's remove four rows contain missing values and convert the two columns of interest from string to numbers.
const data = raw
  .where(row => ((row.year != 'NA') && (row.visitors != 'NA')))
  .parseFloats(['year', 'visitors']);
console.log(`${data.count()} rows`);
console.log(data.detectTypes().toString());

// We can group by year and finc the total number of visitors each year.
const annual = data
  .groupBy(row => row.year)
  .select(group => ({
    year: group.first().year,
    visitors: group.deflate(row => row.visitors).sum()
  }))
  .inflate()
  .orderBy(row => row.year);
console.log(annual.toString());

// What's the NaN doing there in the third row? Are still some missing values in the year column?.
const numNan = data
  .where(row => (isNaN(row.year) || isNaN(row.visitors)))
  .count();
console.log(`${numNan} rows have NaN`);