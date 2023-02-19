import React from 'react'

const SurveyStats = ({summary}) => {
  if (summary.isLoading) {
    return (<p>no data</p>)
  }

  const data = summary.data

  return (
    <table>
      <tbody>
        {
          Object
            .entries(data)
            .map(([key, value]) => (
              <tr key={key}>
                <th>{key.split('_').join(' ')}</th>
                <td>{value}</td>
              </tr>
            ))
        }
      </tbody>
    </table>
  )
}

export default SurveyStats