import React from 'react'

import TableDisplay from './TableDisplay'

const SurveyStats = ({data}) => {
  if (data === null) {
    return (<p>no data</p>)
  }

  const columns = Object.keys(data)
  
  return (
      <TableDisplay 
        columns={columns}
        data={[{key: "surveys", ...data}]}
      />
  )
}

export default SurveyStats