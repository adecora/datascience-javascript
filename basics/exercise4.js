const verbose_sum = (first, second) => {
  console.log(`Going to add ${first} to ${second}`);
  let total = first + second;
  return total;
  console.log(`Finished summing`);
}

var result = verbose_sum(3, 6);
console.log(result);