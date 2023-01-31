const fs = require('fs');
const DF = require('data-forge');
// Read from csv and save as json.
const text = fs.readFileSync('../assets/colors.csv', 'utf-8');
const colorsCSV = DF
  .fromCSV(text)
  .parseFloats(['red', 'green', 'blue']);
  
console.log(colorsCSV.detectTypes().toString());
console.log(colorsCSV.toArray());

fs.writeFileSync('../assets/colors.json', colorsCSV.toJSON(), 'utf-8');

// Read from json and save as csv.
const json = fs.readFileSync('../assets/colors.json', 'utf-8');
const colorsJSON = DF.fromJSON(json);

console.log(colorsJSON.detectTypes().toString());
console.log(colorsJSON.toArray());

fs.writeFileSync('../assets/colorsFromJson.csv', colorsJSON.toCSV(), 'utf-8');