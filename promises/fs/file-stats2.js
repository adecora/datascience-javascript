const fs =  require('fs-extra');

let total_size = 0;
new Promise((resolve, reject) => {
  fs.stat('../non-blocking.js').then((nbStats) => {
    fs.stat('../execution-queue.js').then((eqStats) => {
      resolve(nbStats.size + eqStats.size);
    })
  })
}).then((total) => console.table({total}));