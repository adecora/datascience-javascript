import React from 'react'

const TitledField = ({label, value, onChange}) => {
  return (
    <span>
      {label}: <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
    </span>
  )
}

const ChooseRange = ({start, onStart, end, onEnd, onNewRange}) => {
  return (
    <div>
      <TitledField label="start" value={start} onChange={onStart} />
      &nbsp;&nbsp;
      <TitledField label="end" value={end} onChange={onEnd} />
      &nbsp;&nbsp;
      <button onClick={(e) => onNewRange()}>update</button>
    </div>
  )
}

export default ChooseRange