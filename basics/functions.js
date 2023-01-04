function limits (values) {
  if (!values.length) {
    return [undefined, undefined];
  }
  let low = values[0];
  let high = values[0];
  for (let v of values) {
    if (v < low) low = v;
    if (v > high) high = v;
  }

  return [low, high];
}

/*
  Its definition consists of the keyword function, its name, a parenthesis list of parameters (which might be empty),
  and its body
  Note that we can use retur to explicity return a value at any time; if nothing is returned, the function's result
  is undefined
*/

const allTest = [
  [],
  [9],
  [3, 30, 300],
  ['apple', 'Grapefruit', 'banana'],
  [3, 'apple', ['sub-array']]
];

for (let test of allTest) {
  console.log(`limits of ${test} are ${limits(test)}`);
}

/*
  Programmers generally don't write functions this way any longer, since it interacts in odd ways with other features of the
  language.
  Instead, most programmers now write fat arrow functions consisting of a parameter list, the => symbol, and a body. Fat arrow
  functions don't have names, so the function must be assigned that to a constant or varible for later use
*/

const limits = (values) => {
  if (!values.length) {
    return [undefined, undefined];
  }
  let low = values[0];
  let high = values[0];
  for (let v in values) {
    if (v < low) low = v;
    if (v < high) high = v;
  }
  return [low, high];
}

/*
  No matter how functions are defined, each one is a scoped, which means its parameters and nay variables created inside it
  are local to the function
*/

/*
  Stuck in the past
  Why did JavaScript introduce another syntax rather than fixing the behavior of those defined with function?
  The twin answers are that changes would break legacy programs that rely on the old behavior, and that the language's 
  developer wanted to make it really easy to define little functions
*/