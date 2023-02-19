import { createRoot } from 'react-dom/client'
import React, { useState, useEffect } from 'react'

import SurveyStats from './SurveyStats'
import ChooseRange from './ChooseRange'
import DataChart from './DataChart'
import DataDisplay from './DataDisplay'

const App = () => {
  const baseUrl = 'http://localhost:3418'
  const [state, setState] = useState({
    summary: null,
    start: '',
    end: '',
    data: null
  })
  
  useEffect(() => {
    const url = `${baseUrl}/survey/stats`
    fetch(url)
      .then((res) => res.json())
      .then((summary) => setState({ ...state, summary }))
      .catch((err) => console.error(err))
  }, [])

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
  const onNewRange = () => {
    const params = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    const url = `${baseUrl}/survey/${state.start}/${state.end}`
    fetch(url, params)
      .then((res) => res.json())
      .then((data) => setState({ ...state, data }))
      .catch((err) => console.error(err))
  }

  const tableStyle = {
    overflow: 'scroll',
    height: '200px'
  }

  return (
    <div>
      <h1>Creatures</h1>
      <SurveyStats data={state.summary} />
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

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)