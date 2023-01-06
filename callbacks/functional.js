const test = [1,2,3];

const pure = (values) => {
  const result = [];

  for (let v of values) {
    result.push(v + 1);
  }
  return result;
}


// Rather than modify test, we create a new array for the results
const newArray = pure(test);
console.log(`newArray ${newArray}`);
console.log(`test ${test}`);


// functional programming JavaScript methods

const data = ['this', 'is', 'a', 'test'];
console.log('some longer than 3:',
            data.some((x) => { return x.length > 3 }));
console.log('all longer than 3:',
            data.every((x) => { return x.length > 3 }));
console.log('those longer than 3:',
            data.filter((x) => { return x.length > 3 }));
// all of elements with more than 3 characters start with a 't'?
const result = data
                .filter((x) => { return x.length > 3 })
                .every((x) => { return x[0] === 't' });
console.log(`all longer than 3 start with t: ${result}`);
console.log('shortened', data.map((x) => { return x.slice(0, 2) }));

let acronym = '';
for (let value of data) {
  acronym = acronym + value[0];
}
console.log(`acronym of ${data} is ${acronym}`);

const concatFirst = (accumulator, nextValue) => {
  return accumulator + nextValue[0];
}
acronym = data.reduce(concatFirst, '');
console.log(`acronym of ${data} is ${acronym}`);

acronym = data.reduce((accum, next) => {
  return accum + next[0];
}, '');
console.log('all in one step:', acronym);