/*
  Though unlike C, Python, and many other languagesm there is no separate type for integers: it stores all number as
  64-bit floating-point values, which is accurate up to about 15 decimal digits
    We can check this using typeof, which returns a string 
    (Note: typeof is an operator, not a function: we apply it to something by typing a space followed by the name of
      the thing we'd like to check the type of, e.g., typeof dress)
*/

const aNumber = 123.45;
console.log('the type of', aNumber, 'is', typeof aNumber);

const anInteger = 123;
console.log('the type of', anInteger, 'is', typeof anInteger);

/*
  We have already met strings, which may contain ny Unicode character
*/

const aString = 'some text';
console.log('the type of', aString, 'is', typeof aString);

/*
  Funcitons are also a type of data, a fact whose implications we will explore in Chapter 3
*/

console.log('the type of', console.log, 'is', typeof console.log);

/*
  Rather than showing the other basic types one by one, we will put three values in a list and loop over it
*/

const otherValues = [true, undefined, null];
for (let value of otherValues) {
  console.log('the type of', value, 'is', typeof value);
}

/*
  - JavaScript's boleean type can be either true or false, though we will see other things can be treated as Booleans.
  - undefined means "hasn't been given a value"
  - null means "has a value, which is nothing"
*/