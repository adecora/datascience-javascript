import React from 'react';
import ReactDOM from 'react-dom';

// https://parceljs.org/getting-started/migration/#babel
class Counter extends React.Component {
  constructor (props) {
    super(props);
    this.state = { counter: 0 };
  }

  increment = (event) => {
    this.setState({ counter: this.state.counter + 1});
  }

  reset = (event) => {
    this.setState({ counter: 0 });
  }

  render = () => {
    return (
      <p>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.reset}>reset</button>
        <br/>
        current: {this.state.counter}
      </p>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('app')
);