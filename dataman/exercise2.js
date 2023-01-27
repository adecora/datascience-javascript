const fs = require('fs');

const [inputFile, outputFile] = process.argv.slice(2);

const data = fs.readFileSync(inputFile, 'utf-8')
              .trim()
              .split('\n');

const head = data[0];
let sample = data.slice(1)
                .reduce((acc, rec) => {
                  const year = rec.split(',')[3];
                  acc[0]['years'].push(year);
                  acc[0]['data'].push({year, rec});
                  return acc;
                }, [{ years: [], data: []}])
                .map(({years, data}) => ({
                  years,
                  data: data
                        .filter((rec, i) => years.indexOf(rec['year']) === i)
                        .map(({year, rec}) => 
                          `INSERT INTO data_table (${head}) VALUES (${rec});`)
                }));

fs.writeFileSync(outputFile, sample[0].data.join('\n'), 'utf-8');