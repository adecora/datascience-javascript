const data = [
  {'date': '1977-7-16', 'sex': 'M', 'species': 'NL'},
  {'date': '1977-7-16', 'sex': 'M', 'species': 'NL'},
  {'date': '1977-7-16', 'sex': 'F', 'species': 'DM'},
  {'date': '1977-7-16', 'sex': 'M', 'species': 'DM'},
  {'date': '1977-7-16', 'sex': 'M', 'species': 'DM'},
  {'date': '1977-7-16', 'sex': 'M', 'species': 'PF'},
  {'date': '1977-7-16', 'sex': 'F', 'species': 'PE'},
  {'date': '1977-7-16', 'sex': 'M', 'species': 'DM'}
];

const newData = data.reduce((accum, next, index) => {
  if (next['sex'] === 'F') {
    accum.push({
      'seq': index + 1,
      'year': next['date'].slice(0, 4),
      'sex': next['F'],
      'species': next['species']
    });
  }
  return accum;
}, [])


console.log(`newData is ${JSON.stringify(newData)}`);