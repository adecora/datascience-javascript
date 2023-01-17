// We can use setTimeout to build a generic non-blocking function
const nonBlocking = (callback) => {
  setTimeout(callback, 0);
}

['a', 'b', 'c'].forEach(val => {
  console.log(`about to do nonBlocking for ${val}`);
  nonBlocking(() => console.log(`inside callback for ${val}`));
});

// Node provides a function called setImmediate that to the same as using a timeout of zero
['a', 'b', 'c'].forEach(val => {
  console.log(`about to do setImmediate for ${val}`);
  setImmediate(() => console.log(`inside immediate handler for ${val}`))
});