const fs = require('fs-extra');

let total_size = 0;
const files = ['../non-blocking.js', '../execution-queue.js'];

Promise.all(files.map(f => fs.stat(f)))
  .then(stats => ({ total: stats.reduce((total, s) => { return total + s.size}, 0)}))
  .then(console.table)