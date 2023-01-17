import React, { useState } from "react";
import * as ReactDOM from "react-dom/client";

import NumberDisplay from "./NumberDisplay";
import UpAndDown from "./UpAndDown";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = (event) => {
    console.log(event);
    setCount(count + 1);
  } 

  const decrement = (event) => {
    console.log(event);
    setCount(count - 1);
  }

  return (
    <div>
      <UpAndDown up={increment} down={decrement} />
      <NumberDisplay label="counter" value={count} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);