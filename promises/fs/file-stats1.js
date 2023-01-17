const fs = require('fs-extra');

let total_size = 0;
const files = ['../non-blocking.js', '../execution-queue.js'];

for (let fileName of files) {
  fs.stat(fileName).then((stats) => {
    total_size += stats.size;
  });
}

console.table({total_size});