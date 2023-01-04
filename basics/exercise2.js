const isTruthy = (value) => {
  if (Array.isArray(value) && value.length === 0) {
    return false;
  }
  return Boolean(value);
}

const values = [0, 1, '', 'string', undefined, null, [], [1, 2, 3]];
for (let v of values) {
  console.log(`${v} of type ${typeof v} is ${isTruthy(v)? 'truthy' : 'falsy'}`);
}