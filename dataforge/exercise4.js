const fs = require('fs');
const DF = require('data-forge');

const text = fs.readFileSync('../assets/surveys.csv', 'utf-8');
const data = DF
  .fromCSV(text)
  .parseInts(['year', 'hindfoot_length', 'weight'])

console.log(data.detectTypes().toString());
console.log(`data has ${data.count()} rows`);

const aggr = data.summarize({
  year: {
    year_min: series => series.min(),
    year_avg: series => series.average(),
    year_max: series => series.max()
  },
  hindfoot_length: {
    hindfoot_length_min: series => series.min(),
    hindfoot_length_avg: series => series.average(),
    hindfoot_length_max: series => series.max()
  },
  weight: {
    weight_min: series => series.min(),
    weight_avg: series => series.average(),
    weight_max: series => series.max()
  },
})

console.log(aggr);