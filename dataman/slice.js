// We get data from: wget -O surveys.csv  https://figshare.com/ndownloader/files/10717177
const fs = require('fs');

const [inputFile, numLines, outputFile] = process.argv.slice(2);
const lines = fs.readFileSync(inputFile, 'utf-8')
                .split('\n');

const header = lines[0];

const sample = lines.slice(1)
        .map(line => [Math.random(), line])
        .sort((left, right) => left[0] - right[0])
        .slice(0, parseInt(numLines))
        .map(pair => pair[1]);

fs.writeFileSync(outputFile, header + '\n' + sample.join('\n'));