import React from 'react'

// Exercise4. Merging displays.
const TableDisplay = ({columns, data}) => {
  
  return (
    <table>
      <tbody>
        <tr>
          {columns.map((v, i) => <th key={i + '-' + v}>{v}</th>)}
        </tr>
        {
          data.map((row, ridx) => {
            return (<tr key={row.key}>
              {
                columns.map((col, cidx) => {
                  return (<td key={ridx + '-' + cidx}>{row[col]}</td>)
                })
              }
            </tr>)
          })
        }
      </tbody>
    </table>
  )
}

export default TableDisplay