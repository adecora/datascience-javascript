const fs = require('fs');
const DF = require('data-forge');

const text = fs.readFileSync('../assets/earthquakes.csv', 'utf-8');
const earthquakes = DF
  .fromCSV(text)
  .parseDates('Time')
  .parseFloats(['Latitude', 'Longitude', 'Depth_Km', 'Magnitude']);

console.log(`earthquakes is a ${earthquakes.constructor.name} with ${earthquakes.count()} rows`);

const step1 = earthquakes.groupBy(row => row.Magnitude);
console.log(`step1 is a ${step1.constructor.name} with ${step1.count()} rows`);

const step2 = step1.select(group => ({
  Magnitude: group.first().Magnitude,
  Depth_Km: group.deflate(row => row.Depth_Km).average()
}));
console.log(`step2 is a ${step2.constructor.name} with ${step2.count()} rows`);

const step3 = step2.inflate();
console.log(`step3 is a ${step3.constructor.name} with ${step3.count()} rows`);

const step4 = step3.orderBy(row => row.Magnitude);
console.log(`step4 is a ${step4.constructor.name} with ${step4.count()} rows`);