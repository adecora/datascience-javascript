/*
  We start with arrays that contain other arrays, which are usually processed by nested loops
*/

const nested = [
  ['northwest', 'northeast'],
  ['southwest', 'southeast']
];

for (let outer of nested) {
  for (let inner of outer) {
    console.log(inner);
  }
}

/*
  A JavaScript program can also make choices: it executes the body of and if statement if and only if the condition is true. 
  Each if have an else, whose body is only executed if the condition isn't true
*/

const values = [0, 1, '', 'text', undefined, null, [], [2, 3]];
for (let element of values) {
  if (element) {
    console.log(element, 'of type', typeof element, 'is truthy');
  } else {
    console.log(element, 'of type', typeof element, 'is falsy');
  }
}

/*
  Arrays are heterogeneous, i.e., they can contain values of many different types
  JavaScript odd ideas about the nature of truth
    - 0 is falsy, while all other number are truthy
    - Empty string is falsy and all other string are truthy
    - undefined and null are both falsy, as expected
    - Empty array is truthy, which is different from its treatment in most programming languages
        JavaScript says that an empty array is there, it just happens to be empty, this behavior is still a common cause of bugs
        When testing an array, check that Array.lenght is zero (Note that is a property, not a method, i.e.m should be treated 
        as a variable, not called like a function)
*/


/*
  Safety Tips
  Always use === (triple equals) and !== when testing for equality and inequality in JavaScript
  == and != do type conversion, which can be produce some ugly surprises
*/