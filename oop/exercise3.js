class Active {
  constructor (name, transform) {
    this.name = name;
    this.transform = transform;
    this.subscribers = [];
  }

  subscribe (someone) {
    this.subscribers.push(someone);
  }
  
  static transform (x) {
    return x;
  }

  update (input) {
    console.log(this.name, 'got', input);
    let output;
    if (this.transform)
      output = this.transform(input);
    else
      output = Active.transform(input);
    for (let s of this.subscribers) {
      s.update(output);
    }
  }
}

let start = new Active('start', (x) => Math.min(x, 10));
let left = new Active('left', (x) => 2 * x);
let right = new Active('right', (x) => x + 1);
let final = new Active('final');
start.subscribe(left);
start.subscribe(right);
left.subscribe(final);
right.subscribe(final);

start.update(123);
// start got 123
// left got 10
// final got 20
// right got 10
// final got 11


class Delay extends Active {
  constructor (name, state) {
    super(name, (x) => {
      this.state.push(x);
      const prevState = this.state.shift();

      return prevState;
    });
    this.state = [state];
  }
}

start = new Delay('start', 1);
left = new Delay('left', 2);
right = new Delay('right', 3);
final = new Delay('final', 4);
start.subscribe(left);
start.subscribe(right);
left.subscribe(final);
right.subscribe(final);

start.update(123);
// start got 123
// left got 1
// final got 2
// right got 1
// final got 3