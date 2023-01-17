import React from 'react';

const UpAndDown = ({up, down}) => (
  <p>
    <button onClick={up}> [+] </button>
    <button onClick={down}> [-] </button>
  </p>
);

export default UpAndDown;