const makePromise = (someInteger) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(someInteger) ,someInteger * 1000);
  });
}

Promise.all([makePromise(7), makePromise(8), makePromise(2),
            makePromise(6), makePromise(5)]).then(
  numbers => console.log(numbers))

Promise.race([makePromise(7), makePromise(8), makePromise(2),
            makePromise(6), makePromise(5)]).then(
  numbers => console.log(numbers))