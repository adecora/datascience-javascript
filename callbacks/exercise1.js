const vals = [1, 2, 3];

const doubleInPlace = (values) => {
  values.forEach((value, index, container) => {
    container[index] = value * 2;
  });
}

doubleInPlace(vals);
console.log(`vals after change: ${vals}`);