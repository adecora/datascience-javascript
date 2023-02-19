import React from 'react'

import TableDisplay from './TableDisplay'

import { parseFloats } from './utils'

const DataDisplay = ({data}) => {
  if (data === null) {
    return (<p>no data</p>)
  }

  const columns = [
    'year',
    'min_hindfoot_length',
    'ave_hindfoot_length',
    'max_hindfoot_length',
    'min_weight',
    'ave_weight',
    'max_weight'
  ]
  
  // Exercise5. Formatting.
  data = parseFloats(data)
  
  return (
    <TableDisplay 
      columns={columns}
      data={data}
    />
  )
}

export default DataDisplay