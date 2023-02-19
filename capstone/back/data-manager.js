const fs = require('fs')
const DF = require('data-forge')

class DataManager {
  constructor (filename) {
    const raw = fs.readFileSync(filename, 'utf-8')
    this.data = DF.fromCSV(raw)
      .parseInts(['record_id', 'month', 'day', 'year', 'plot_id'])
      .parseFloats(['hindfoot_length', 'weight'])
  }
  
  getSurveyStats () {
    return this.data.summarize({ 
        year: {
          year_low: series => series.min(),
          year_high: series => series.max(),
          record_count: series => series.count()
        },
        // Exercise1. adding animal female and male count.
        sex: {
          female: series => series.where(row => row === 'F').count(),
          male: series => series.where(row => row === 'M').count()
        }
      })
  }

  getSurveyRange (minYear, maxYear) {
    return this.data
      .where(row => ((row.year) >= minYear) && (row.year <= maxYear))
      .groupBy(row => row.year)
      .select(group => ({
        key: group.first().year.toString(),
        year: group.first().year,
        min_hindfoot_length: group.deflate(row => row.hindfoot_length).min(),
        ave_hindfoot_length: group.deflate(row => row.hindfoot_length).average(),
        max_hindfoot_length: group.deflate(row => row.hindfoot_length).max(),
        min_weight: group.deflate(row => row.weight).min(),
        ave_weight: group.deflate(row => row.weight).average(),
        max_weight: group.deflate(row => row.weight).max(),
      }))
      .toArray()
  }
}

module.exports = DataManager