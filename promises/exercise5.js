const timeout = (ms) => new Promise(resolve => {
  setTimeout(resolve, ms);
})

const makePromise = async(someInteger) => {
  await timeout(someInteger * 1000);
  return someInteger;  
}

Promise.all([makePromise(7), makePromise(8), makePromise(2),
            makePromise(6), makePromise(5)]).then(
  numbers => console.log(numbers))

Promise.race([makePromise(7), makePromise(8), makePromise(2),
            makePromise(6), makePromise(5)]).then(
  numbers => console.log(numbers))