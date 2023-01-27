const fs = require('fs');
const seedrandom = require('seedrandom');
const commandLineArgs = require('command-line-args');
const getUsage = require('command-line-usage');

const random = seedrandom('always same random results');
const optionDefinitions = [
  { 
    name: 'help',
    description: 'Display this usage guide.',
    alias: 'h', 
    type: Boolean 
  },
  { 
    name: 'input',
    typeLabel: '{underline file}',
    description: 'The input to process.',
    alias: 'i',
    type: String,  
  },
  { 
    name: 'output',
    typeLabel: '{underline file}',
    description: 'The output file.',
    alias: 'o',
    type: String,  
  },  
  { 
    name: 'lines', 
    description: 'Number of {italic random} lines to copy.',
    alias: 'l', 
    type: Number 
  }
];
const sections = [
  {
    header: 'slice.js app',
    content: 'Generates a {italic random slice file} from an input file.'
  },
  {
    header: 'Synopsis',
    content: [
      '$ node exercise5.js [{bold --lines} {underline numlines}] {bold --input} {underline file} [{bold --output} {underline file}]',
      '$ node exercise5.js {bold --help}'
    ]
  },
  {
    header: 'Options',
    optionList: optionDefinitions
  }
]

try {
  const options = commandLineArgs(optionDefinitions);

  const valid = 
    options.help ||
    (
      /* input file supplied should exist */
      options.input  &&
      fs.existsSync(options.input)
    );

    if (!valid) {
      throw new Error(`File {bold ${options.input}} doesn't exist.`);
    }

    if (options.help) {
      console.log(getUsage(sections));
    } else {
      const data = fs.readFileSync(options.input, 'utf-8')
                    .trim()
                    .split('\n');
      
      const numLines = options.lines || data.length - 1;
      const outputFile = options.output || process.stdout.fd;
      
      const head = data[0];
      const sample = data.slice(1)
                .map(rec => [random(), rec])
                .sort((left, right) => left[0] - right[0])
                .slice(0, parseInt(numLines))
                .map(rec => rec[1]);

      fs.writeFileSync(outputFile, head + '\n' + sample.join('\n'), 'utf-8');
    }
} catch (error) {
  const badUsage = [
    {
      header: 'Bad usage',
      content: `${error.message}`
    },
    {
      header: 'Synopsis',
      content: [
        '$ node exercise4.js [{bold --lines} {underline numlines}] {bold --input} {underline file} [{bold --output} {underline file}]',
        '$ node exercise4.js {bold --help}'
      ]
    }
  ];
  console.error(getUsage(badUsage));
}