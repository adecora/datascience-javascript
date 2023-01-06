// Create test array
const test = [1,2,3];

const impure = (values) => {
  for (let i in values) {
    values[i] += 1;
  }
}


// Run function
impure(test);

// Original array has been modified
console.log(`test: ${test}`);