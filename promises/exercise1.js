// Tries to apply the forEach on the output of 'console.log' undefined without the ;
console.log('starting...');
[500, 1000].forEach(t => {
  console.log(`about to setTimeout for ${t}`)
  setTimeout(() => {console.log(`inside timer handler for ${t}`)}, 0)
}, this)