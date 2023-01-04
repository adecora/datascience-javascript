let current = 0;
let table = [];
// while loop computes the square of current from 0 to 4
while (current < 5) {
  const entry = `square of ${current} is ${current * current}`;
  // Array.push fills the table array
  table.push(entry);
  // increments current by 1
  current += 1;
}
table.reverse();
for (let line of table) {
  console.log(line);
}