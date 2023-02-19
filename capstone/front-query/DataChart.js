import React from 'react'
import { VegaLite } from 'react-vega'

const DataChart = ({data}) => {
  if (data === null) {
    return (<p>no data</p>)
  }
  
  const values = data
    .filter(r => r)
    .map(row => ({x: row.ave_hindfoot_length, y: row.ave_weight}))
  let specs = {
    description: 'Mean Weight vs Mean Hindfoot Length',
    mark: 'point',
    encoding: {
      x: {'field': 'x', 'type': 'quantitative'},
      y: {'field': 'y', 'type': 'quantitative'}
    },
    data: { name: 'values' },
    autosize: {
      type: 'fit',
      resize: true
    }
  }
  let options = {
    'actions': {
      'export': false,
      'source': false,
      'editor': false
    }
  }
  let scatterData = {
    'values': values
  }
  
  return (
    <VegaLite spec={specs} data={scatterData} options={options} />
  )
}

export default DataChart