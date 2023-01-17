import React from 'react';

const DisplayError = ({display}) => {
  if (display)
    return null;
  
  const style = {
    color: 'red'
  }
  return (
    <p style={style}>Error unvalid date</p>
  )
}

export default DisplayError;