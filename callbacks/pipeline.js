let pipeline = (initial, first, second) => {
  return second(first(initial));
}


const trim = (text) => { return text.trim(); }
const dot = (text) => { return text.replace(/ /g, '.'); }

let original = '  this example uses text  ';

const trimThenDot = pipeline(original, trim, dot);
console.log(`trim then dot: |${trimThenDot}|`);

const dotThemTrim = pipeline(original, dot, trim);
console.log(`trim then dot: |${dotThemTrim}|`);


pipeline = (current, operations) => {
  for (let op of operations) {
    current = op(current);
  }
  return current;
}

const double = (text) => { return text + text; }

original = ' some text ';
const final = pipeline(original, [double, trim, dot]);
console.log(`|${original}| -> |${final}|`);