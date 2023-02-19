import { useQuery } from 'react-query'
import React, { useState } from 'react'

import SurveyStats from './SurveyStats'
import ChooseRange from './ChooseRange'
import DataChart from './DataChart'
import DataDisplay from './DataDisplay'

const App = () => {
  const baseUrl = 'http://localhost:3418'
  const [state, setState] = useState({
    start: '',
    end: '',
    data: null
  })
  
  const summary = useQuery(
    'survey/stats',
    async () => {
      const url = `${baseUrl}/survey/stats`
      const res = await fetch(url)
      return res.json()
    }, {
      refetchOnWindowFocus: false
    }
  )
  console.log(summary)

  const onStart = (start) => {
    setState({
      ...state,
      start
    })
  }
  const onEnd = (end) => {
    setState({
      ...state,
      end
    })
  }
  const onNewRange = async() => {
    const params = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    const url = `${baseUrl}/survey/${state.start}/${state.end}`
    const res = await fetch(url, params)
    const data = await res.json()
    setState({ ...state, data })
  }

  const tableStyle = {
    overflow: 'scroll',
    height: '200px'
  }

  return (
    <div>
      <h1>Creatures</h1>
      <SurveyStats summary={summary} />
      <ChooseRange
        start={state.start}
        onStart={onStart}
        end={state.end}
        onEnd={onEnd}
        onNewRange={onNewRange}
      />
      <DataChart data={state.data} />
      <div style={tableStyle}>
        <DataDisplay data={state.data} />
      </div>
    </div>
  )
}

export default App