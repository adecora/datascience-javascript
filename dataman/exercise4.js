const fs = require('fs');
const papa = require('papaparse');

const _average = (...values) => {
  let sum = 0;
  for (let v of values) {
    sum += v;
  }
  return sum / values.length;
}

class DataManager {
  constructor (filename) {
    const raw = fs.readFileSync(filename, 'utf-8');
    const options = {header: true, dynamicTyping: true};
    let parse = papa.parse(raw, options);
    if (parse.errors) {
      const errors = parse.errors.map((error) => {
        console.error(`There is an error on line ${error.row} of type ${error.type}}: "${error.message}"`);
        return error.row;
      });
      parse.data = parse.data.filter((_, i) => !errors.includes(i));
    }
    this.data = parse.data;
  }

  getSurveyStats () {
    return {
      year_low: this._get(this.data, 'year', Math.min),
      year_high: this._get(this.data, 'year', Math.max),
      record_count: this.data.length
    }
  }

  _get(values, field, func) {
    return func(...values.map(rec => rec[field]).filter(val => !isNaN(val)));
  }

  getSurveyRange (...args) {
    const [minYear, maxYear] = args.slice(0,2);
    const fields = args.slice(2);
    return Array(1 + maxYear - minYear)
      .fill(0)
      .map((_, i) => minYear + i)
      .map(year => {
        const subset = this.data.filter(r => r.year === year);
        if (subset.length) {
          let rec = {
            key: `${year}`, 
            year
          };

          for (let field of fields) {
            rec[`min_${field}`] = this._get(subset, field, Math.min);
            rec[`ave_${field}`] = this._get(subset, field, _average);
            rec[`max_${field}`] = this._get(subset, field, Math.max);
          }

          return rec;
        } else {
          return {
            key: `${year}`,
            year,
            data: 'no stats'
          }
        }
      })
  }
}

module.exports = DataManager;