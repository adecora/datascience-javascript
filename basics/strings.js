/* 
  We can interpolate values into a back-quoted string. (We have back quotes because this 
  feature was added to JavaScript long after after the language was first created)
  The value to be interpolated is put in ${...}, can be any valid JavaScript expression,
  including a function or method call
*/

for (let color of ['red', 'green', 'blue']) {
  const message = `color is ${color}`;
  console.log(message, `and capitalized is ${color.toUpperCase()}`);
}

/* This allows us to succinctly add variables to string instead of */
const message = "color is" + color + "and capitalized is" + color.toUpperCase();