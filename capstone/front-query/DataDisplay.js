import React from 'react'

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

  return (
    <table>
      <tbody>
        <tr>
          {columns.map((v, i) => <th key={i + '-' + v}>{v}</th>)}
        </tr>
        {
          data.map((row, ridx) => {
            return (<tr key={row.key}>{columns.map((col, cidx) => {
              return (<td key={ridx + '-' + cidx}>{row[col]}</td>)
            })}</tr>)
          }) 
        }
      </tbody>
    </table>
  )
}

export default DataDisplay