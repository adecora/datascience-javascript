const fs = require('fs');
const seedrandom = require('seedrandom');

const random = seedrandom('always same random results');

const [inputFile, numLines, outputFile] = process.argv.slice(2);

const data = fs.readFileSync(inputFile, 'utf-8')
              .split('\n');

const head = data[0];

const sample = data.slice(1)
                .map(rec => [random(), rec])
                .sort((left, right) => left[0] - right[0])
                .slice(0, parseInt(numLines))
                .map(rec => rec[1]);

fs.writeFileSync(outputFile, head + '\n' + sample.join('\n'), 'utf-8');