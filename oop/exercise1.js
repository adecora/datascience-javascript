class Delay {
  constructor (state) {
    this.state = [state];
  }

  call (value) {
    this.state.push(value);
    const prevState = this.state.shift();
    return prevState;
  }
}


const example = new Delay('a');
for (let value of ['b', 'c', 'd']) {
  console.log(value, '->', example.call(value));
}