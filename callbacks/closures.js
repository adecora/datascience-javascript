const pipeline = (current, operations) => {
  for (let op of operations) {
    current = op(current);
  }
  return current;
}

const adder = (increment) => {
  const f = (value) => {
    return value + increment;
  }
  return f;
}

const add_1 = adder(1);
const add_2 = adder(2);
console.log(`add_1(100) is ${add_1(100)}, add_2 is ${add_2(100)}`);


let result = pipeline(100, [adder(1), adder(2)]);
console.log(`adding 1 and 2 to 100 -> ${result}`);

result = pipeline(100, [(x) => x + 1, (x) => x + 2]);
console.log(`adding 1 and 2 to 100 -> ${result}`);