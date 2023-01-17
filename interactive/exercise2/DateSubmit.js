import React from 'react';

const DateSubmit = ({label, value, onChange, onCommit}) => (
  <p>
    {label}:
    <input type="text" value={value}
          onChange={(event) => onChange(event.target.value)} />
    <button onClick={(event) => onCommit(value)}>new</button>
  </p>
);

export default DateSubmit;